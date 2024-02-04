import map from "../../assets/Why invest_.png";
import site from "../../assets/site.png";
import bolt from "../../assets/bolt.svg";
import drop from "../../assets/drop.svg";
import tractor from "../../assets/tractor.svg";
import building from "../../assets/building.svg";
export const siteData = [
  {
    site: site,
    id: "s1",
    name: "Theme Park Site",
    overview:
      "Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.",
    map: map,
    recreation: [
      {
        rec: "Adult rides",
        recpic: bolt,
      },
      {
        rec: "Family Rides",
        recpic: drop,
      },
      {
        rec: "Restaurants",
        recpic: tractor,
      },
      {
        rec: "Premium",
        recpic: building,
      },
    ],
    extra: [
      {
        extra_value: "200 Acres",
        extra_desc: "area",
      },
      {
        extra_value: "5 Lacks",
        extra_desc: "Starting price",
      },
      {
        extra_value: "10 days",
        extra_desc: "Remaining Days",
      },
      {
        extra_value: "2.5 years",
        extra_desc: "Next check",
      },
    ],
  },
];

export const siteFormData = [
  {
    id: 1,
    topic: "Complete profile",
    btn_content: "Complete",
    date: "12/12/2023",
    remarks: "Good job!",
    rem2: "Complete",
    alternate: "Download",
  },
  {
    id: 2,
    topic: "Step 1",
    btn_content: "Pay",
    date: "14/12/2023",
    remarks: "5% of total amount",
    rem2: "Rs 1,00,000",
    alternate: "Receipt",
  },
  {
    id: 3,
    topic: "Step 2",
    btn_content: "Pay",
    date: "15/12/2023",
    remarks: "",
    rem2: "Complete",
    alternate: "Download",
  },
  {
    id: 4,
    topic: "Step 3",
    btn_content: "Pay",
    date: "12/12/2023",
    remarks: "We will get back to you in 3 months",
    rem2: "Complete",
    alternate: "Download",
  },
];
