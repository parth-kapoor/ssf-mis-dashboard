export default {
  items: [
    {
      name: "Home",
      url: "/dashboard",
      badge: {
        variant: "info",
      },
    },
    {
      name: "Complexes",
      icon: "icon-folder-alt",
      url: "/complex/complexTree"
      // children: [
      //   {
      //     name: "Summary",
      //     url: "/bookings/summary",
      //     icon: "icon-book-open",
      //   },
      //   {
      //     name: "Complex List",
      //     url: "/bookings/ongoing",
      //     icon: "icon-calendar",
      //   },
      // ],
    },
    {
      name: "Incidence",
      icon: "icon-folder-alt"
    },
    {
      name: "Reports",
      icon: "icon-folder-alt",
    },
    {
      name: "Administration",
      icon: "icon-folder-alt",
    }
  ],
};
