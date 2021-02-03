# back-end

## **Sign Up**

Returns json data about a register event.

- **URL**

https://african-marketplace-backend-24.herokuapp.com/api/auth/register/

- **Method:**

  `POST`

- **BODY Params**

  **Required:**

  `{ "user_first_name": "STRING", "user_email": "STRING", "user_password": ""STRING", "role": INT }`

- **Success Response:**

  - **Code:** 201 <br />

- **Error Response:**

  - **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: ${err} }`

  OR

  - **Code:** 400 UNAUTHORIZED <br />
    **Content:** `{ error : "email taken" OR "Missing credentials email or password." }`
    `

## **LOGIN**

---

Returns JSON data about a login event and token upon success.

- **URL**

  https://african-marketplace-backend-24.herokuapp.com/api/auth/register/

- **Method:**

  `POST`

- **BODY Params**

  **Required:**

  `{ "user_email": "STRING", "user_password": ""STRING" }`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `{ message: "welcome", token }`

- **Error Response:**

  - **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error: err }`

  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "invalid credentials" }`

- **Sample Call:**

## **GET ALL LISTINGS**

---

Returns json data regarding all active projects.

- **URL**

  https://african-marketplace-backend-24.herokuapp.com/api/listings

- **Method:**

  `GET`

- **BODY Params**

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    `[ { listing information }, {listing information} ]`

- **Error Response:**

  - **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error: err }`

  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content--Invalid token:** `{ error: "token invalid" }`
    **Content--No token provided:** `{ error: "token required" }`

- **Sample Call:**

## **Create a Listing**

---

Returns json data regarding all active projects including new project.

- **URL**

  https://african-marketplace-backend-24.herokuapp.com/api/listings

- **Method:**

  `POST`

- **BODY Params**

**Required:**

`{ "listing_name": "STRING", "listing_description": "STRING", "listing_price": INT, "marketplace_id": INT, "user_id": INT }`

- **Success Response:**

  - **Code:** 201<br />
    **Content:**

    `[ { listing }, { listing }, ... ]`

- **Error Response:**

- **Code:** 500 SERVER ERROR <br />
  **Content:** `{ error: err }`

  OR

- **Code:** 401 UNAUTHORIZED <br />
  **Content--Invalid token:** `{ error: "token invalid" }`
  **Content--No token provided:** `{ error: "token required" }`

## **Edit a Listing**

---

Returns JSON data regarding success/error: on success returns entire /listings array

- **URL**

  https://african-marketplace-backend-24.herokuapp.com/api/listings/:listing_id

- **Method:**

  `PUT`

- **BODY Params**

**Required:**

`{ listing_name, listing_description, listing_price, marketplace_id }`

- **Success Response:**

  - **Code:** 201<br />
    **Content:**

    `[ { listing }, { listing }, ... ]`

- **Error Response:**

- **Code:** 500 SERVER ERROR <br />
  **Content:** `{ error: err }`

  OR

- **Code:** 401 UNAUTHORIZED <br />
  **Content--Invalid token:** `{ error: "token invalid" }`
  **Content--No token provided:** `{ error: "token required" }`

## **Delete a Listing**

---

Returns JSON data regarding success/error: on success returns entire /listings array

- **URL**

  https://african-marketplace-backend-24.herokuapp.com/api/listings/:listing_id

- **Method:**

  `DELETE`

- **BODY Params**

**Required:**

`valid listing_id in URL params`

- **Success Response:**

  - **Code:** 201<br />
    **Content:**

    `{ "deleted listing": { ...listing } }`

- **Error Response:**

- **Code:** 500 SERVER ERROR <br />
  **Content:** `{ error: err }`

  OR

- **Code:** 401 UNAUTHORIZED <br />
  **Content--Invalid token:** `{ error: "token invalid" }`
  **Content--No token provided:** `{ error: "token required" }`
