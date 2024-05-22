# Overview

A process tree is the assembly of a lineage of a process all the way to its root, and then all the way from root to leaves. An "actor" is a specific event in the tree, identified by its eventID.

Using the process-create and file-write events assemble a process tree for the provided actor event to identify whether the actor is malicious. An actor is considered malicious if ANY of the following are true:

The actor's sha256 hash is known malicious.
Any of the actor's parents sha256 hashes are known malicious.
Any of the actor's descendants sha256 hashes are known malicious.

Input:

List of known malicious hashes.
Event list, including both process-create and file-write events.
Actor's eventID.

Output:

true if the actor is malicious, false if not.

Example

Events

Consider the following process-create and file-write events:

process-create

{ "type": "process-create", "eventID": "a1", "parentID": null, "sha256": "b6812f0ca43f3ca26921261e8b64161c5b6fdac166fda8ba6e0c7488ae1212f2" }
{ "type": "process-create", "eventID":"c1", "parentID":"a1", "sha256": "cbbd0ccfc8df396a9a460473ec16870ff51ed8cb94edf5f06ae44d08488e1c50" }
{ "type": "process-create", "eventID":"a2", "parentID":"a1", "sha256": "2d0a16b0dfa83bbd6a9fa16f22bf84c77636ad1d89968fa50740d743828f8319" }
{ "type": "process-create", "eventID":"a3", "parentID":"a2", "sha256": "810998cff08dc390ab066d37a79d6ed6491d99e88db3e65683c0181f8b36ec31" }
{ "type": "process-create", "eventID":"c2", "parentID":"c1", "sha256": "4d257edf26eebbbf00f87a881e055f9fedbfcfa9173c920127182a67e22d3ec3" }
{ "type": "process-create", "eventID":"c3", "parentID":"c1", "sha256": "3f0c34db192cb3d4adbaafb578d6985b2501076f27f85741423e83c945d8f238" }
{ "type": "process-create", "eventID":"d1", "parentID":"c2", "sha256": "d9fe06d1018386aaa7abe0b2c68247b6fb3b1b7f3f6ccd87df4645f4bb32e8a7" }
{ "type": "process-create", "eventID":"d2", "parentID":"c2", "sha256": "746d38b84bd12c42e4313b1f6ceac055386d1e69f39f3223a9f7a5e3177139c9" }

file-write

{ "type": "file-write", "eventID":"b1", "parentID":"a2", "sha256": "d6ea4ee4218ead09f67c3a0afb8f9f7ca0a26150ece5d638778650796661d67b" }
{ "type": "file-write", "eventID":"b2", "parentID":"a3", "sha256": "359fbcd001f6669dd9fd661a1167b89764a6939b4366ebbf8c86e043b75d179c" }
{ "type": "file-write", "eventID":"e1", "parentID":"c3", "sha256": "575f6bc786ea55ed4666fa3d282d4935943ab2df52c01218b88904256a77c154" }
{ "type": "file-write", "eventID":"f1", "parentID":"c3", "sha256": "4c909ffa97b4b5f4ad77d8b0185cb113f349a99699d90148418f2c0819e97b25" }

Known malicious hashes

Assume the following SHA256 hashes are known malicious:

074fdff607ec6e3abb92aebc1fbf2fdffc4f7c0b20027a0d1e4c1cdca94f3ae3
1d9953bcc362548bbefbe63345d3b6058f26a875191a5e08fec4f106dc93c22c
2fc402ad7b53ff4a9ca527ec8f188c28fb9f42dfe171b77439c46b1912cdf18a
359fbcd001f6669dd9fd661a1167b89764a6939b4366ebbf8c86e043b75d179c
53cd9f462d758a4a4e70ba4262eeca3b33b81db121c44abc18b6ab8da20696a0
6f18387f32ba1f8d6efc61e430a640cefa571fa0a74192ad68f636acf76702c0
86c94e5f96b047700f26f29d0f0ecf7bc76c78883c859e4d26fe4f3e3e00e7ad
a35cc9eb427fb3ebddef87a9ffa5eb38eedaca33ba2419757de62c6ee1669948
b4911e503858d4b265946254141a9d9c040cc65fc020e5dffdecec34bf324991
dc1a58694467305a98f62b7d4b6b6945398e43f0f982a0e13c2a8982ef8bb84a
e107aa35a6cdcc801e11fe06bd2c579b66a48f01bfbb24a9ce98ec316839cc40

Is actor malicious?

If the provided actorEventID is equal to a2 then the following event is the actor, identified by the eventID property equaling a2:

{ "type": "process-create", "eventID":"a2", "parentID":"a1", "sha256": "2d0a16b0dfa83bbd6a9fa16f22bf84c77636ad1d89968fa50740d743828f8319" }

The actor is malicious since it has a descendent file-write event with a known malicious hash:

{ "type": "file-write", "eventID":"b2", "parentID":"a3", "sha256": "359fbcd001f6669dd9fd661a1167b89764a6939b4366ebbf8c86e043b75d179c" }
