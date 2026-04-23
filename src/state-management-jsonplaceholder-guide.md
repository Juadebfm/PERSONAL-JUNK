# React State Management (Beginner-Friendly Guide with JSONPlaceholder Example)

## 1. What is a SPA (Single Page Application)?

A **Single Page Application (SPA)** is a type of web app that uses **one main HTML file**.

In traditional HTML, CSS, and JavaScript projects:
- You may have multiple HTML pages
- Moving to another page often loads a new file

In React:
- You usually have one main HTML file
- React updates what is shown on the screen using JavaScript

That is why React apps are called **Single Page Applications (SPAs)**.

---

## 2. What Happens When We Move From One Page to Another?

In React, when you move from one page to another, the browser usually does not load a brand new HTML page.

Instead:
- React changes the components being shown
- Some components may disappear
- Some new components may appear

### Example:
Imagine you are on a **Users Page** and React shows a list of users from an API.

Then you move to a **Posts Page**.

When you come back to the **Users Page**, React may need to decide:
- Should it fetch the users again?
- Should it remember the users from before?
- Should it remember which user you clicked?

That is where **state** comes in.

---

## 3. What is State?

**State is memory for a component.**

It helps React remember values that can change while the app is running.

### Simple meaning:
State is data that changes and affects what the user sees.

### Examples of state:
- The text inside an input
- Whether a menu is open or closed
- The current page number
- The list of users fetched from an API
- The selected user

---

## 4. State Using a Real Example (JSONPlaceholder)

Let us use **JSONPlaceholder**, a free fake API for practice.

Example endpoint:

```txt
https://jsonplaceholder.typicode.com/users
```

This gives us sample users.

### Imagine this React example:
You build a page that:
- fetches users from JSONPlaceholder
- stores them in state
- displays them on the screen

### Example idea:
- When the page loads, React fetches the users
- The users are saved in state
- React shows them in a list

If state was not used, React would not know what to display after the data arrives.

So in this case:

- **Fetched users** = state
- **Selected user** = state
- **Loading status** = state

---

## 5. Why State is Important

Without state:
- React cannot properly remember changing data
- Your UI would not update correctly
- API data may not be shown well
- User interactions may be lost

With state:
- React remembers the fetched data
- React remembers selected items
- React updates the screen when the data changes

---

## 6. A Beginner Example

Imagine you fetch users from JSONPlaceholder and show them in a list.

A student clicks on **Leanne Graham**.

Now you want React to remember:
- which user was clicked
- maybe show that user’s details
- maybe highlight the selected user

You can store that in state.

So state helps React remember:

- `users`
- `selectedUser`
- `isLoading`

---

## 7. Local State

**Local state** is state that belongs to only one component.

### Example:
A `UsersPage` component fetches users from JSONPlaceholder and stores them inside itself.

That state may include:
- `users`
- `loading`
- `selectedUser`

That is local state because it belongs only to the `UsersPage` component.

### Simple idea:
> Local state is private memory for one component.

---

## 8. Global State

**Global state** is shared state that many components can use.

### Example:
Imagine many pages in your app need the current logged-in user.

For example:
- Home page
- Dashboard page
- Profile page
- Navbar

Instead of fetching or storing that data separately in every component, you can keep it in one shared place.

That shared place is global state.

### Simple idea:
> Global state is shared memory for the whole app.

---

## 9. How React Remembers Things

React remembers things by storing data in state.

For example, on a page using JSONPlaceholder:

- React fetches users
- Saves them in state
- Displays them
- When the state changes, React updates the UI

So React is not just “remembering by magic.”
It remembers because **you store important changing data in state**.

---

## 10. What Happens If You Leave a Page and Come Back?

This is important.

If a component is removed from the screen and later shown again:
- its local state may reset
- the data may be fetched again
- selected values may be lost

### Example:
You are on `UsersPage`
- users are fetched
- one user is selected

Then you move to `PostsPage`

When you come back to `UsersPage`, React may mount that component again.
If the state only lived inside that page, it may start fresh.

This is why developers sometimes move important state to a higher level or use global state.

---

## 11. How Do We Manage State Properly?

We usually start small.

### Step 1: Local state
Use local state for things like:
- a selected user
- a loading flag
- a list fetched for just one page

### Step 2: Shared state
If multiple components need the same data, move the state upward or share it.

### Step 3: Global state
Use tools like **Context API** when many parts of the app need the same data.

---

## 12. Context API

The **Context API** helps React share data across many components without passing props manually through every level.

### Problem:
Imagine this structure:

- App
  - Dashboard
    - Sidebar
    - MainContent
      - UserCard

If `UserCard` needs data, sometimes that data is passed through many components.
This can become stressful.

### Solution:
Use Context API.

Context lets you store shared data in one place so other components can access it.

---

## 13. JSONPlaceholder Example with Context API

Imagine your React app fetches users from:

```txt
https://jsonplaceholder.typicode.com/users
```

Now imagine that:
- the **Navbar** needs the selected user name
- the **Profile panel** needs the selected user details
- the **Sidebar** needs the user email

Instead of fetching the same data in all those components, you can:

1. Fetch the users once
2. Store them in Context
3. Let any component read the users

That is a good beginner example of **global state**.

### In this example:
- `users` can be global state
- `selectedUser` can be global state too

Because many components may need them

---

## 14. Easy Analogy for Students

Think of React state like memory in a classroom.

### Local state:
A student keeps notes in their own notebook.
Only that student uses it.

### Global state:
The teacher writes notes on the board.
Everyone in the classroom can see it.

So:

- **Local state** = one component’s notebook
- **Global state** = shared classroom board

---

## 15. What Should Students Learn First?

Before learning state management deeply, students should understand:

1. What React components are
2. What SPAs are
3. How props work
4. What `useState` does
5. What `useEffect` does for fetching data
6. Why shared data becomes difficult
7. How Context API solves that

---

## 16. A Simple Teaching Flow

Here is a good order for teaching:

### First:
Explain that React apps are SPAs

### Next:
Explain that React components can appear and disappear

### Then:
Explain that changing data must be remembered

### Then:
Introduce state as component memory

### After that:
Teach local state using simple examples like:
- counter
- button active state
- input field

### Then:
Teach API state using JSONPlaceholder:
- fetched users
- loading state
- selected user

### Finally:
Teach global state with Context API

---

## 17. Final Summary

- React is usually a **SPA**
- SPAs use one main HTML file
- React changes components on the screen instead of loading new HTML pages
- When data changes, React needs a way to remember it
- That memory is called **state**
- **Local state** belongs to one component
- **Global state** is shared across many components
- **Context API** helps manage shared state

### One-line definition:
> State is how React remembers changing data.

### Using JSONPlaceholder:
If you fetch users, save them, display them, and remember the selected user, that is state management in action.
