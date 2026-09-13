# 🧱 A-5 Dev Stack Builder

Build your ideal web development stack — one technology at a time.

A-5 Dev Stack Builder is a React + TypeScript application that lets you browse a curated collection of modern web technologies and assemble them into your own personal stack. Every technology is presented as a rich card with its category, difficulty level, community rating and a short description, so you can decide what belongs in your toolkit before you commit to learning it.



## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| **React 19** | Component-based UI library |
| **TypeScript** | Static typing and safer refactors |
| **Vite** | Lightning-fast dev server and build tool |
| **Tailwind CSS 4** | Utility-first styling |
| **DaisyUI 5** | Pre-built component classes on top of Tailwind |
| **React Toastify** | Toast notifications for user feedback |
| **React Icons** | Icon set |
| **Oxlint** | Fast linting for code quality |

---

## ✨ Features

### 1. Interactive Stack Builder

Click **Add to Stack** on any technology card and it instantly appears in your stack panel.

### 2. Sticky Stack Panel with Full Control

The selected stack lives in a sticky sidebar that follows you as you scroll. Remove a single technology with its ✕ button, or clear everything at once with **Remove All** — which stays disabled while the stack is empty. Every add and remove action fires a toast notification, so no change ever goes unnoticed.

### 3. Loading State

While the technology data is being fetched, the entire section renders a Loading Spinner.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/muhammadsakib-max/Assignment-05.git

# Move into the project folder
cd Assignment-05

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx                  # Top navigation bar
│   ├── Hero.tsx                    # Landing section
│   ├── Technologies.tsx            # Main section — renders the card grid
│   ├── TachCard.tsx                # Single technology card
│   ├── SeletedTach.tsx             # "Your Stack" sidebar panel
│   └── Footer.tsx                  # Page footer
├── types/                          # Shared TypeScript types
├── App.tsx                         # Root component + data fetching
└── main.tsx                        # Entry point

public/
└── data.json                       # Technology dataset
```

---

## 🧠 React Concepts — Q&A

Here are short answers you can actually say out loud in a viva. Simple English, nothing fancy.

**1. What is JSX and why React uses it?**

JSX is basically HTML-like syntax that we write inside JavaScript. We use it because writing the UI in this way is much easier.

**2. Props vs state?**

Props come from the parent component to the child, it cannot change them. State is the component's own data, it can change, and when state changes the component re-renders.

**3. What does `useState` do and where did I use it?**

useState is a function that lets a component hold data that can change over time. It gives me the value and a setter function. In my project I used it for the store data, like `const [stack, setStack] = useState([])`.

**4. What does `useEffect` do and why I needed it for the JSON?**

useEffect runs code after the component renders, mainly for side effects like fetching data. Loading the JSON is a side effect, and if I call fetch directly in the component body, it will run on every render and can create an infinite loop. So I put the fetch inside useEffect with an empty dependency array `[]`, so it runs only once when the component mounts, and then I store the data in state.

**5. Why does every item in `.map()` need a unique key?**

The key helps React understand which item is which when the list changes. If there is no key, React can't match old items with new ones properly, so it may re-render the wrong item or lose the item's state. That's why we use something unique like an `.id`.

**6. What is conditional rendering, with an example?**

Conditional rendering means showing different UI depending on a condition. In my project, when the stack is empty I show a message instead of the list:

```jsx
{stack.length === 0
  ? <p>No item selected yet</p>
  : stack.map(item => <StackItem key={item.id} item={item} />)}
```

**7. Parent to child, and child back to parent?**

Parent to child is simple, I just pass the data as props. For child to parent, the parent passes a function down as a prop, and the child calls that function with the data.

---

## 👤 Author

**Md Sakib**
Programming Hero — Batch 14