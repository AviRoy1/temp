   <!-- API endpoints  -->

localhost:4000/api/v1/register
Registers a new user in the system.
HTTP Method: POST
Body: {name, email, password}

<!--  -->

localhost:4000/api/v1/login
Authenticates a user and generates a session token for subsequent requests.
HTTP Method: POST
Body: {email,password}

<!--  -->

localhost:4000/api/v1/logout
Logs out the currently authenticated user and invalidates the session token.
HTTP Method: GET
Body: {}

<!--  -->

localhost:4000/api/v1/me
Retrieves the profile information of the authenticated user.
HTTP Method: GET
Body: {}

<!--  -->

localhost:4000/api/v1/changepassword
Changes the password for the authenticated user.
HTTP Method: PUT
Body: {oldPassword, newPassword}

<!--  -->

localhost:4000/api/v1/register
Updates the profile information of the authenticated user.
HTTP Method: PUT
Body: {name, email}

<!--  -->

localhost:4000/api/v1/register
Sends a message.
HTTP Method: POST
Body: {senderId, receiverId, message}
