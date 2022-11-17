export const getDashboardBreadCrumbs = (navigate: any) => [
  {
    text: "Dashboard",
  },
];

export const getCreateMeetingBreadCrumbs = (navigate: any) => [
  {
    text: "Dashboard",
    href: "#",
    onClick: (e: any) => {
      e.preventDefault();
      navigate("/");
    },
  },
  {
    text: "Create Meeting",
  },
];

export const getOneOnOneMeetingBreadCrumbs = (navigate: any) => [
  {
    text: "Dashboard",
    href: "#",
    onClick: (e: any) => {
      e.preventDefault();
      navigate("/");
    },
  },
  {
    text: "Create Meeting",
    href: "#",
    onClick: (e: any) => {
      e.preventDefault();
      navigate("/create");
    },
  },
  {
    text: "Create 1 on 1 Meeting",
  },
];

export const getVideoConferenceBreadCrumbs = (navigate: any) => [
  {
    text: "Dashboard",
    href: "#",
    onClick: (e: any) => {
      e.preventDefault();
      navigate("/");
    },
  },
  {
    text: "Create Meeting",
    href: "#",
    onClick: (e: any) => {
      e.preventDefault();
      navigate("/create");
    },
  },
  {
    text: "Create Video Conference",
  },
];

export const getMyMeetingsBreadCrumbs = (navigate: any) => [
  {
    text: "Dashboard",
    href: "#",
    onClick: (e: any) => {
      e.preventDefault();
      navigate("/");
    },
  },
  {
    text: "My Meetings",
  },
];

export const getMeetingsBreadCrumbs = (navigate: any) => [
  {
    text: "Dashboard",
    href: "#",
    onClick: (e: any) => {
      e.preventDefault();
      navigate("/");
    },
  },
  {
    text: "Meetings",
  },
];
