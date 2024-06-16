import {
  Compatible,
  CoverAll,
  FaceBook,
  Instagram,
  Linkdin,
  NoInstall,
  TotalPrivate,
  Twitter,
  LocationIcon2,
  AndroidIcon,
  FamilySafeIcon,
  LocateWebIcon,
  MoneyBackIcon,
  MulitpuleWaysIcon,
  PhoneLocationIcon,
  PrivateIcon,
  ProjectIcon,
  SimpleUseIcon,
  TrackPhoneIcon,
  UnlimitedLoactionIcon,
} from "./icon";

export const navData = [
  {
    name: "Home",
    id: "#home",
    about: "home",
  },
  {
    name: "How It Works",
    id: "#howworks",
    about: "howitswork",
  },
  {
    name: "Features",
    id: "#features",
    about: "features",
  },
];
export const footerdata = [
  {
    name: "Help",
    id: "#hero",
    about: "home",
  },
  {
    name: "Contact us",
    id: "#login",
    about: "howitswork",
  },
  {
    name: "Found Phone",
    id: "#findyour",
    about: "features",
  },
];
export const universalData = [
  {
    icon: <Compatible />,
    title: "compatible for every phones",
    describe:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
  },
  {
    icon: <CoverAll />,
    title: "Covers all networks",
    describe:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
  },
  {
    icon: <NoInstall />,
    title: "No installation required",
    describe:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
  },
  {
    icon: <TotalPrivate />,
    title: "Totally private",
    describe:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
  },
];
export const socialMedia = [
  {
    icon: <Linkdin />,
    about: "likdin",
    link: "https://www.linkedin.com/home/?originalSubdomain=in",
  },
  {
    icon: <Instagram />,
    about: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    icon: <FaceBook />,
    about: "FaceBook",
    link: "https://www.facebook.com/",
  },
  {
    icon: <Twitter />,
    about: "Twitter",
    link: "https://x.com/home?lang=en",
  },
];

export const AdvantagesArray = [
  {
    svg: <LocationIcon2 />,
    heading: " Instant location lookups",
    paragraph:
      "Check the location of your registered phones whenever you choose. Add up to 5 phones to your account.",
  },
  {
    svg: <AndroidIcon />,
    heading: " Android & iPhone compatible",
    paragraph:
      "Our service works with any Android or iPhone device, and takes just minutes to set up.",
  },
  {
    svg: <SimpleUseIcon />,
    heading: " Simple to use",
    paragraph:
      "Our service has been designed to be simple to use. Just follow our walkthrough wizard to locate your phone.",
  },
  {
    svg: <FamilySafeIcon />,
    heading: "Keep your family safe",
    paragraph:
      "Keep track of your family using our tools. Know that your children or elderly relatives are safe.",
  },
];
export const HowItWorkArray = [
  {
    svg: <LocateWebIcon />,
    heading: " Locate the people important to you, from any web device",
    paragraph:
      "Family will always be number one and keeping them safe has never been more important. Locateaphone.com allows you to keep track of up to 5 mobile phones, providing you with accurate location information from any web enabled device. Keep them safe without being invasive.",
  },
  {
    svg: <PhoneLocationIcon />,
    heading: " Accurate location info for any phone on any network.",
    paragraph:
      "Instantly track the location of a mobile phone at any time. No apps, no downloads, Locateaphone.com works with any Android or iPhone device. Locateaphone.com uses a range of different tools to find the location of a phone. Our unique phone location walkthrough process will determine  the best tools to use for each situation.",
  },
];
export const CompaniesArray = [
  {
    heading: "Cell Tracker",
    subheading: "Ideal for freelancers and solopreneurs",
    correct: "1 seat",
    correctTwo: "2 projects",
    dollerAdd: 0,
    buildAnnual: " free forever",
    button: "Start your free trial",
    arialabel: "startyourfreetrial",
  },
  {
    heading: "Cell Tracker",
    headingSkyblue: "Pro",
    subheading: "Perfect for teams, startups, and growing businesses.",
    correct: "Unlimited seats",
    correctTwo: "Unlimited projects",
    dollerAdd: 10.8,
    buildAnnual: " per seat/month (billed annually)",
    button: "30-Day Free Trial",
    mostPopular: "Most Popular",
    noCredit: "No credit card required.",
    arialabel: "mostpopular",
  },
];
export const CreateAccountArr = [
  {
    Icon: <UnlimitedLoactionIcon />,
    heading: "Unlimited location searches ",
  },
  { Icon: <TrackPhoneIcon />, heading: "Track up to 5 phones" },
  {
    Icon: <MulitpuleWaysIcon />,
    heading: "Multiple ways to locate a phone ",
  },
  {
    Icon: <ProjectIcon />,
    heading: "Protect your family ",
  },
  {
    Icon: <MoneyBackIcon />,
    heading: "14 day money back guarantee ",
  },
  {
    Icon: <PrivateIcon />,
    heading: "Private & confidential ",
  },
];
