Feature: Product -> add product to basket
  As a customer
  I would like to be able to search for a product and access to the product details
  So that I can add the product to my basket
  
  Scenario: Example scenario
    When I am on the landing page
    Then I can see logo in navigation bar    

  Scenario: Search for a product
    Given I am on the landing page
    When I search for a random product
    Then the product listing page should display a list of products

  Scenario: Access a product detail page
    Given I am on the landing page
    And I search for a random product
    Then I should be taken to the product detail page

  Scenario: Add a product to Basket
    Given I am on the landing page
    And I search for a random product
    And I select a random product from the returned list
    And I change the product quantity
    When I add the selected product to the basket
    Then I should see the product added to the basket
    And I should see the selected quantity for the product

  Scenario: Add and remove a product to Basket
    Given I am on the landing page
    And I search for a random product
    And I add a random product to the basket
    When I open the basket and remove the added product
    Then my basket should be empty
