export const data = [
  { id: 1, label: "Home", to: "/" },
  {
    id: 2,
    label: "Contact",
    to: "/contact",
    children: [
      { id: 3, label: "Email", to: "/email" },
      { id: 4, label: "Phone", to: "/phone" },
      { id: 5, label: "Address", to: "/address" },
    ],
  },
  {
    id: 6,
    label: "Location",
    to: "/location",
    children: [
      {
        id: 7,
        label: "Country",
        to: "/country",
        children: [
          {
            id: 8,
            label: "City",
            to: "/city",
            children: [{ id: 9, label: "Area", to: "/area" }],
          },
          { id: 10, label: "Zip", to: "/zip" },
        ],
      },
    ],
  },
  {
    id: 11,
    label: "About",
    to: "/about",
  },
];
