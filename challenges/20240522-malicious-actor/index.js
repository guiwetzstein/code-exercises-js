const { events, maliciousHashes } = require('./data.js');

class Event {
  constructor(type, eventID, parentID, sha256) {
    this.type = type;
    this.eventID = eventID;
    this.parentID = parentID;
    this.sha256 = sha256;
    this.children = [];
  }
}

function isActorMalicious(actorEventID, events, maliciousHashes) {
  // Parse events into a map of eventID to Event objects
  const eventMap = new Map();
  events.forEach((event) => {
    eventMap.set(
      event.eventID,
      new Event(event.type, event.eventID, event.parentID, event.sha256)
    );
  });

  // Build the tree structure
  eventMap.forEach((event) => {
    if (event.parentID) {
      const parentEvent = eventMap.get(event.parentID);
      if (parentEvent) {
        parentEvent.children.push(event);
      }
    }
  });

  // Helper function to check if a hash is malicious
  const isMaliciousHash = (hash) => maliciousHashes.includes(hash);

  // Find the actor's event
  const actorEvent = eventMap.get(actorEventID);
  if (!actorEvent) return false;

  // Check if the actor's hash is malicious
  if (isMaliciousHash(actorEvent.sha256)) return true;

  // Check if any of the parent's hashes are malicious
  let current = actorEvent;
  while (current.parentID) {
    current = eventMap.get(current.parentID);
    if (isMaliciousHash(current.sha256)) return true;
  }

  // Helper function to perform DFS and check for malicious hashes
  const dfsCheckMalicious = (event) => {
    if (isMaliciousHash(event.sha256)) return true;
    for (const child of event.children) {
      if (dfsCheckMalicious(child)) return true;
    }
    return false;
  };

  // Check if any of the descendant's hashes are malicious
  return dfsCheckMalicious(actorEvent);
}

// Example usage
console.log('a1', isActorMalicious('a1', events, maliciousHashes)); // true
console.log('a2', isActorMalicious('a2', events, maliciousHashes)); // true
console.log('a3', isActorMalicious('a3', events, maliciousHashes)); // true
console.log('c1', isActorMalicious('c1', events, maliciousHashes)); // false
console.log('c2', isActorMalicious('c2', events, maliciousHashes)); // false
console.log('c3', isActorMalicious('c3', events, maliciousHashes)); // false
console.log('d1', isActorMalicious('d1', events, maliciousHashes)); // false
console.log('d2', isActorMalicious('d2', events, maliciousHashes)); // false
console.log('b1', isActorMalicious('b1', events, maliciousHashes)); // false
console.log('b2', isActorMalicious('b2', events, maliciousHashes)); // true
console.log('e1', isActorMalicious('e1', events, maliciousHashes)); // false
console.log('f1', isActorMalicious('f1', events, maliciousHashes)); // false
