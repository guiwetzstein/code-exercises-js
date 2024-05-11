# Interface Segregation Principle (ISP)

In this example, we have an interface Vehicle and we are trying to implement it on a Car class and a Helicopter class. But the interface has too much aspects of a land vehicle, which the Helicopter should not need to implement, which is not good.

So we abstract even more the interfaces, in a way we can extend Vehicle from other two new interfaces, which have it's own properties, for land vehicles and aerial vehicles. We will have more interfaces with less properties each.
