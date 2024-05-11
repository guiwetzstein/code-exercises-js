# Open-Closed Principle (OCP)

In this example, we have this Transport class, containing a calculation function, based on volume and carrier type. Every time we need to add a new logic of calculation for a new carrier, we are forced to make changes to the base Transport class, which is not good.

We want to add a new carrier, and we cannot change the base class. To respect this principle, we need to create a new class for each carrier type, which extend the original Transport class. Transport class still maintains the cost calculation logic, but each carrier class now can define it's multiplier for the calculation to be done.
