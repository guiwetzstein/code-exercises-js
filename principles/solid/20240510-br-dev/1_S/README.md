# Single Responsility Principle (SRP)

In this example, we can see that the Car class was handling the car movement and at the same time handling the logging.

First change was separate the car logic from the logging logic, but even further, we created a separate class for each log, so we don't keep adding infinite log functions to just one general logger class.
