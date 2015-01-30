Project: Contacts App for Change Heroes.
Author: Aaron VandenBrink 
Date: Jan 30, 2015

Process:

Began by building the ContactController to house the most common data that would be use within the app.  I chose to include the Get HTTP request in this controller to request the JSON data and then register that data to a global variable so that it could be accessed by both the Search Bar on the left hand side, as well as the Detail Controller, without having to execute another get request.

I build a new directive to house a search-form element tag. This Search Controller using bindings so that the list of names were automatically compared against the search field as it was updated (case insensitive).

I also use nsRoute so that when a contact is selected the url is updated to reflect the change and load the contacts details into the detail Controller. I also used the $rootScope variable to house the JSON data so that when the previous page was pressed the detail controller can still access the previous appropirate data. Filters were also used to ensure that the list data is sorted alphabetically by last name.

The Detail Controller used a boolian value to establish whether the controller was in editing mode or not, togglable by the edit button in the top corner.  This controller contained a number of text inputs with custom disabled css to give the impression of regular text, except in the case of the Title Names as they needed separate elements to be align correctly next to eachother when not in editing mode. (although this could be updated to adjust the input size with some more js). The inputs on this form were also constructed using bindings for immidiate feedback and updating of the JSON data.  I also used a custom directive and filter to specify the format of the Phone number value to ensure that as the user was typing the view live updated to show the (123) 456-7890 format, while still preserving the simple data form of 1234567890 in the JSON data.

the JSON data is not currently being pushed back to the server in an updated format to preserve the data, but should be implemented upon pressing the "Done" button, or when a user selects a new Contact.