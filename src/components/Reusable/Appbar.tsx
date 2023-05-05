import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Autocomplete, Stack } from "@mui/joy";
import { motion } from "framer-motion";
import Logo from "../../images/Logo/logo.png";
import Image from "next/image";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useRouter } from "next/router";
import Link from "next/link";
import MobileDrawer from "./MobileDrawer";

function Appbar() {
  const [Search, setSearch] = React.useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/${Search}`);
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -6,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          // background:
          //   "linear-gradient(to right,#ffffff2a,#ffffff2a ,#002BFF8a )",
          backdropFilter: "blur(3px)",
          backgroundColor: "#011D3E",
          boxShadow: 0,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            paddingX: 2,
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#000",
            }}
          >
            <Link href="/">
              <Image src={Logo} alt="Logo" width={30} />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none", mr: 1 } }}>
            {/* <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{
                color: "#000",
              }}
            >
              <MenuIcon
                sx={{
                  color: "#fff",
                }}
              />
            </IconButton> */}
            <MobileDrawer />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Stack direction="row" gap={1}>
              <Link href="/" className="my-auto">
                <Image src={Logo} alt="Logo" width={30} height={30} />
              </Link>
              <form onSubmit={handleSubmit}>
                <Stack direction="row" gap={1}>
                  <Autocomplete
                    placeholder="Search..."
                    variant="outlined"
                    onChange={(props, option) => {
                      setSearch(option?.url ?? "");
                    }}
                    options={CitiesData}
                    getOptionLabel={(option) => option.name}
                    groupBy={(option) => option.cityName}
                    sx={{ width: 250, borderRadius: 3000, paddingX: 2 }}
                  />
                  <IconButton
                    type="submit"
                    sx={{
                      borderRadius: 999,
                      backgroundColor: "#ffffff2a",
                      backdropFilter: 'blur(5px)'
                    }}
                  >
                    <SearchRoundedIcon
                      sx={{
                        color: "#fff",
                      }}
                    />
                  </IconButton>
                </Stack>
              </form>
            </Stack>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, mr: 3 }}>
            <Stack direction="row" gap={2} alignItems="center">
              <Link
                href={"/#ByCities"}
                className="cursor-pointer text-white font-athiti font-semibold tracking-wide"
              >
                Category
              </Link>
              <Link
                href="/gallery"
                className="cursor-pointer text-white font-athiti font-semibold tracking-wide"
              >
                Gallery
              </Link>
              <Link
                href="/contact-us"
                className="cursor-pointer text-white font-athiti font-semibold tracking-wide"
              >
                Contact Us
              </Link>
              <form onSubmit={handleSubmit}>
                <Stack direction="row" gap={1}>
                  <Autocomplete
                    placeholder="Search..."
                    variant="outlined"
                    onChange={(props, option) => {
                      setSearch(option?.url ?? "");
                      console.log();
                    }}
                    options={CitiesData}
                    getOptionLabel={(option) => option.name}
                    groupBy={(option) => option.cityName}
                    sx={{
                      width: 300,
                      borderRadius: 3000,
                      paddingX: 2,
                    }}
                  />
                  <IconButton
                    type="submit"
                    sx={{
                      borderRadius: 999,
                      backgroundColor: "#ffffff2a",
                      backdropFilter: 'blur(5px)'
                    }}
                  >
                    <SearchRoundedIcon
                      sx={{
                        color: "#fff",
                      }}
                    />
                  </IconButton>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}

const CitiesData = [
  {
    cityName: "Porbandar",
    url: "cityitem?i=4ba1b467-3606-4046-80bc-414dae3bfab4",
    name: "Sudama Mandir",
  },
  {
    cityName: "Dwarka",
    url: "cityitem?i=183bb8ef-0fd9-47c0-9168-42d6ba166c5b",
    name: "Rukmini Devi Temple",
  },
  {
    cityName: "Narmada",
    url: "cityitem?i=8db7bb4f-ffaf-4674-acde-faf92a5fcb45",
    name: "Sardar Sarovar",
  },
  {
    cityName: "Vadodara",
    url: "cityitem?i=54240d8b-dbb1-46a7-8b7c-db1452eaa01f",
    name: "Sayaji Baug",
  },
  {
    cityName: "Junagadh",
    url: "cityitem?i=64337c35-be98-4d92-aba5-9e24a5c41ef5",
    name: "Damodar kund",
  },
  {
    cityName: "Vadodara",
    url: "cityitem?i=8c1bfdc9-81e5-4305-861f-0da8d1102d13",
    name: "Tambekar Wada",
  },
  {
    cityName: "Panchmahal",
    url: "cityitem?i=3e8f4dcc-b715-4acd-a1f0-ab75968e8c07",
    name: "Pavagadh Hill Kalika Mata Temple",
  },
  {
    cityName: "Bhavnagar",
    url: "cityitem?i=70542768-75ab-435c-bac7-8ea6f9e79a83",
    name: "Gandhi Smriti",
  },
  {
    cityName: "Ahmedabad",
    url: "cityitem?i=2844e1e6-f6b0-424f-939b-75fb8c0fef5e",
    name: "Nalsarovar Bird Sanctuary",
  },
  {
    cityName: "Dwarka",
    url: "cityitem?i=341b790a-7348-495d-900c-1a65fccf62e0",
    name: "Dwarkadhish Temple",
  },
  {
    cityName: "Kutch",
    url: "cityitem?i=8a1fa1d3-6114-4a94-a72c-e6e3a6b74b9e",
    name: "Lakhpat Fort",
  },
  {
    cityName: "Ahmedabad",
    url: "cityitem?i=38e3b156-1905-461d-ad33-078796f3befc",
    name: "Heritage Walk Ahmedabad",
  },
  {
    cityName: "Ahmedabad",
    url: "cityitem?i=24ee40a8-68f5-4060-a6eb-c98afe91662a",
    name: "Jhulta Minara Sidi Bashir Mosque",
  },
  {
    cityName: "Gandhinagar",
    url: "cityitem?i=6f71bbf0-7a62-4922-bb92-49a83cd51eab",
    name: "Indroda Dinosaur and Fossil Park",
  },
  {
    cityName: "Narmada",
    url: "cityitem?i=cbbce23d-3d6b-43d6-901e-adf7ce87c526",
    name: "Cactus Garden",
  },
  {
    cityName: "Ahmedabad",
    url: "cityitem?i=d0f32184-c5f4-43bc-ad4b-b50a1de242ad",
    name: "Sabarmati Riverfront",
  },
  {
    cityName: "Bhavnagar",
    url: "cityitem?i=533d8ead-a849-4164-94e1-8223d8acb3c9",
    name: "Ganga Deri",
  },
  {
    cityName: "Gandhinagar",
    url: "cityitem?i=eec8f03e-16da-44bf-b7c2-5d872c9850fd",
    name: "Adalaj ni Vav",
  },
  {
    cityName: "Bhavnagar",
    url: "cityitem?i=df1201a7-7e80-4a38-be4b-b8a9eaf92a07",
    name: "Palitana And Shatrunjaya hill",
  },
  {
    cityName: "Dang ",
    url: "cityitem?i=aab1f176-ba41-4913-862d-8ea273314274",
    name: "Don Hill Station",
  },
  {
    cityName: "Dang ",
    url: "cityitem?i=a8213276-9f53-4061-ac3a-a7ae118deaff",
    name: "Gira Waterfalls",
  },
  {
    cityName: "Rajkot",
    url: "cityitem?i=46a34d57-421e-4f0c-acc8-b2e345c34735",
    name: "Hingolgadh Nature Education Sanctuary",
  },
  {
    cityName: "Bhavnagar",
    url: "cityitem?i=51554534-d796-4d56-8069-f040b8d433ea",
    name: "Nilambag Palace",
  },
  {
    cityName: "Panchmahal",
    url: "cityitem?i=a120ba25-584c-4d18-8dc4-eae2ed03ab69",
    name: "Champaner-Pavagadh Archaeological Park",
  },
  {
    cityName: "Bharuch",
    url: "cityitem?i=2ab515dd-b2dd-4a39-a86c-a1ed432aa0f1",
    name: "Nareshwar",
  },
  {
    cityName: "Dang ",
    url: "cityitem?i=d340ad8d-3000-475f-8223-edf0dd2418d1",
    name: "Girmal Waterfalls",
  },
  {
    cityName: "Kutch",
    url: "cityitem?i=fcc96af5-a20c-4181-b823-c7a2a6f3ab5e",
    name: "Royal Chhatardis",
  },
  {
    cityName: "Surat",
    url: "cityitem?i=0d5f7488-7fcb-4847-9043-30b77e690411",
    name: "Dumas Beach",
  },
  {
    cityName: "Kutch",
    url: "cityitem?i=7f129406-80ad-403c-8a3e-0ba8e363fe35",
    name: "Nirona ( Rogan Painting ) ",
  },
  {
    cityName: "Kutch",
    url: "cityitem?i=d75617df-bd53-4ef7-9da3-825e4064a288",
    name: "Hamisar Lake",
  },
  {
    cityName: "Sabarkantha",
    url: "cityitem?i=be0d5e2d-304f-46d6-a0a6-d86e2774c268",
    name: "Idar Fort",
  },
  {
    cityName: "Surat",
    url: "cityitem?i=e5bdbb0d-169f-4015-ab4e-e33d612b350d",
    name: "Sneh Rashmi Botanical Garden",
  },
  {
    cityName: "Surat",
    url: "cityitem?i=8c1f388b-0ecf-4cb8-824b-affcb33ef01d",
    name: "Suvali Beach",
  },
  {
    cityName: "Junagadh",
    url: "cityitem?i=36ab0696-db20-4cd0-bcda-871f977f02c8",
    name: "Gir National Park",
  },
  {
    cityName: "Surat",
    url: "cityitem?i=549daa86-a4be-47ea-8137-30685df3a6eb",
    name: "Gopi Talav",
  },
  {
    cityName: "Kutch",
    url: "cityitem?i=341011c2-67d3-496e-bbec-b7a6613c626c",
    name: "Great Rann of Kutch",
  },
  {
    cityName: "Patan",
    url: "cityitem?i=d38fbc84-cf17-4ff9-9510-b7c8e9a3abab",
    name: "Rani Ki Vav",
  },
  {
    cityName: "Porbandar",
    url: "cityitem?i=108e6019-9d0b-4422-a1de-51ebfea2cfe2",
    name: "Madhavpur Beach",
  },
  {
    cityName: "Surat",
    url: "cityitem?i=bf636cc9-be2a-4582-8123-b5b90e43589d",
    name: "Sarthana Nature Park",
  },
  {
    cityName: "Narmada",
    url: "cityitem?i=983a1307-cfd5-40de-a186-545437435c74",
    name: "Nilkanthdham Poicha",
  },
  {
    cityName: "Narmada",
    url: "cityitem?i=a55f79fb-13fd-448f-b76b-d1270941d6ec",
    name: "Butterfly Garden",
  },
  {
    cityName: "Sabarkantha",
    url: "cityitem?i=f5282402-8139-4f5c-a898-f0c3226117f4",
    name: "Polo Forest",
  },
  {
    cityName: "Panchmahal",
    url: "cityitem?i=d1de26fe-57c7-4b6c-b330-be9586d44754",
    name: "Saat Kaman",
  },
  {
    cityName: "Dang ",
    url: "cityitem?i=0497ca86-e506-4f7d-8428-114df90892bc",
    name: "Waghai Botanical Garden",
  },
  {
    cityName: "Gandhinagar",
    url: "cityitem?i=85fb14ab-657b-483a-b5b8-d9d878077f62",
    name: "Dandi Kutir Museum",
  },
  {
    cityName: "Rajkot",
    url: "cityitem?i=ffd63c35-7e45-4e0b-951c-d9fcda81f61c",
    name: "Ramkrishna Mission",
  },
  {
    cityName: "Sabarkantha",
    url: "cityitem?i=76d3f2df-f2ed-4d85-96ae-5e5f532fe3e3",
    name: "Dowlat Vilas Palace",
  },
  {
    cityName: "Vadodara",
    url: "cityitem?i=4decbfa2-29aa-4d38-8cd1-6649de47628a",
    name: "Laxmi Vilas Palace",
  },
  {
    cityName: "Gandhinagar",
    url: "cityitem?i=28387428-18e7-4dbb-a960-263eea205d0a",
    name: "Akshardham Temple",
  },
  {
    cityName: "Ahmedabad",
    url: "cityitem?i=51cac0bc-705e-4469-9a89-4365eeff54a4",
    name: "Lalbhai Dalpatbhai Museum",
  },
  {
    cityName: "Bharuch",
    url: "cityitem?i=46526937-3c30-4b2d-9b46-7067f7b3c49c",
    name: "Narmada park",
  },
  {
    cityName: "Kutch",
    url: "cityitem?i=ea630135-d4e9-41d7-a933-11792e3e1992",
    name: "Dholavira",
  },
  {
    cityName: "Rajkot",
    url: "cityitem?i=134ecbe5-b615-4990-b966-dd79022f9550",
    name: "Rayal Vintage Classic Car Collection, Gondal",
  },
  {
    cityName: "Panchmahal",
    url: "cityitem?i=723e48fa-f8f6-4470-a62c-dbdd9453034a",
    name: "Khuniya Mahadev Waterfall",
  },
  {
    cityName: "Panchmahal",
    url: "cityitem?i=2b2b96c6-4223-41a8-8f70-6306a9b11279",
    name: " Helical Stepwell",
  },
  {
    cityName: "Patan",
    url: "cityitem?i=a27216ef-06e0-4d2c-8a67-6bc1ee8a00fd",
    name: "Patan Patola Heritage Museum",
  },
  {
    cityName: "Bharuch",
    url: "cityitem?i=3f07f554-2fd2-454d-aa9d-1f95251f410f",
    name: "Golden Bridge",
  },
  {
    cityName: "Ahmedabad",
    url: "cityitem?i=1ca6c013-e7d9-4bc5-8ddd-6aed43df8807",
    name: "Kankaria Lake",
  },
  {
    cityName: "Dang ",
    url: "cityitem?i=8c6476a1-d098-4ecb-bbeb-c84b460604c4",
    name: "Saputara Lake",
  },
  {
    cityName: "Gandhinagar",
    url: "cityitem?i=ae8a9f60-effc-44e9-8dc8-f22e6ff46ef6",
    name: "Adalaj Trimandir",
  },
  {
    cityName: "Junagadh",
    url: "cityitem?i=0be60c3b-62e4-4e06-9288-267a925cb029",
    name: "Adi kadi Vav",
  },
  {
    cityName: "Panchmahal",
    url: "cityitem?i=ac401fd1-d513-4ae2-a228-2a241aa6b1f5",
    name: "Jambughoda Wildlife Sanctuary",
  },
  {
    cityName: "Kutch",
    url: "cityitem?i=a23c2c92-b953-41c3-ba2f-236a9a69558f",
    name: "Chhari Dhand Bird Sanctuary",
  },
  {
    cityName: "Kutch",
    url: "cityitem?i=ad1e9f0b-2bd6-48e1-8e29-6bd98510cff1",
    name: "Koteshwar Mahadev Temple",
  },
  {
    cityName: "Ahmedabad",
    url: "cityitem?i=1ba3f57d-4938-46f7-b8dd-833d798de6c5",
    name: "Bai Harir Ni vav",
  },
  {
    cityName: "Porbandar",
    url: "cityitem?i=71655c5c-9e5f-4c88-88ff-92faa12fb756",
    name: "Porbandar Bird Santuary",
  },
  {
    cityName: "Bharuch",
    url: "cityitem?i=dc79bdce-fce9-434d-9243-c7877c145244",
    name: "Kabirvad",
  },
  {
    cityName: "Panchmahal",
    url: "cityitem?i=dd2d219d-bd1a-428f-a41d-7098ceac6720",
    name: "Balasinor Dinosaur Museum",
  },
  {
    cityName: "Bhavnagar",
    url: "cityitem?i=ee674ac2-bae8-4b17-bcdf-4fe740edfcac",
    name: "Khodiyar Mandir",
  },
  {
    cityName: "Ahmedabad",
    url: "cityitem?i=d6d1598a-6519-4589-82df-defbae86b88d",
    name: "Hutheesing Jain Temple",
  },
  {
    cityName: "Vadodara",
    url: "cityitem?i=27e7afc2-936c-45f9-bb23-95be0753108f",
    name: "Kirti Mandir",
  },
  {
    cityName: "Kutch",
    url: "cityitem?i=b6021acc-e6de-468a-b36b-b086918fbc6c",
    name: "Kalo Dungar",
  },
  {
    cityName: "Ahmedabad",
    url: "cityitem?i=b38ef5e4-b733-4044-abe0-e219373819c7",
    name: "Sabarmati Ashram",
  },
  {
    cityName: "Kutch",
    url: "cityitem?i=2c746b97-e08d-453a-8cbd-4c9ae5c51f16",
    name: "Aaina Mahal Palace",
  },
  {
    cityName: "Vadodara",
    url: "cityitem?i=ab6130a1-dc17-4022-af11-0d604797ac33",
    name: " Maharaja Fateh Singh Museum",
  },
  {
    cityName: "Narmada",
    url: "cityitem?i=b6866952-63d1-4e16-816c-b61d5b2625b9",
    name: "Statue of Unity",
  },
  {
    cityName: "Ahmedabad",
    url: "cityitem?i=e4a8736c-0ddb-453b-a0a2-f1ef1e82385b",
    name: "Shree Swaminarayan mandir",
  },
  {
    cityName: "Surat",
    url: "cityitem?i=1551158d-1de1-4fba-8945-1a01a52a72b7",
    name: "British Cemetery",
  },
  {
    cityName: "Junagadh",
    url: "cityitem?i=1d0bd302-d5a5-49f0-929b-231c9ad4bcea",
    name: "Buddhist caves",
  },
  {
    cityName: "Junagadh",
    url: "cityitem?i=3f419754-da68-4a36-85c0-b8f6b48a742a",
    name: "Girnar-Hills",
  },
  {
    cityName: "Bhavnagar",
    url: "cityitem?i=889998d5-3004-4a1e-99e1-3ade93bb15aa",
    name: "Velavadar Blackbuck National Park",
  },
  { cityName: "Surat", url: "city?c=Surat", name: "Surat" },
  { cityName: "Ahmedabad", url: "city?c=Ahmedabad", name: "Ahmedabad" },
  { cityName: "Porbandar", url: "city?c=Porbandar", name: "Porbandar" },
  { cityName: "Dang ", url: "city?c=Dang ", name: "Dang " },
  { cityName: "Patan", url: "city?c=Patan", name: "Patan" },
  { cityName: "Rajkot", url: "city?c=Rajkot", name: "Rajkot" },
  { cityName: "Narmada", url: "city?c=Narmada", name: "Narmada" },
  { cityName: "Junagadh", url: "city?c=Junagadh", name: "Junagadh" },
  { cityName: "Kheda", url: "city?c=Kheda", name: "Kheda" },
  { cityName: "Sabarkantha", url: "city?c=Sabarkantha", name: "Sabarkantha" },
  { cityName: "Panchmahal", url: "city?c=Panchmahal", name: "Panchmahal" },
  { cityName: "Vadodara", url: "city?c=Vadodara", name: "Vadodara" },
  { cityName: "Bharuch", url: "city?c=Bharuch", name: "Bharuch" },
  { cityName: "Bhavnagar", url: "city?c=Bhavnagar", name: "Bhavnagar" },
  { cityName: "Gandhinagar", url: "city?c=Gandhinagar", name: "Gandhinagar" },
  { cityName: "Dwarka", url: "city?c=Dwarka", name: "Dwarka" },
  { cityName: "Kutch", url: "city?c=Kutch", name: "Kutch" },
];

export default Appbar;
