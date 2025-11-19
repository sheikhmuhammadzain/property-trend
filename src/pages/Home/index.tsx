import { useState, useEffect, useCallback } from 'react';
import Navbar from "@/components/containers/Navbar";
import SF from "@/components/Tables/SF";
import Condo from "@/components/Tables/Condo";
import { apiService } from '@/services/apiServices';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Hero from "@/components/ui/Hero";
import LandingHighlights from "@/components/ui/LandingHighlights";
import Home_Des_Icon from "@/assets/des-icon.png"
import Logo from "@/assets/Logo.png"
import Footer from "@/components/containers/Footer";
import MarketMethodologyPanel from "@/components/Tables/MarketMethodologyPanel";


const Tables = () => {
  const [sfData, setSFData] = useState([])
  const [contraData, setContraData] = useState([])
  const [city, setCity] = useState("Houston")
  const [year, setYear] = useState(new Date().getFullYear().toString())
  const [month, setMonth] = useState((new Date().getMonth() + 1).toString())
  const [loading, setLoading] = useState(true)
  const [allLocations, setAllLocations] = useState([])

  const getAllLocationsHandler = async () => {
    try {
      const response = await apiService.getAllLocations()
      if (response.success && response.data?.locations) {
        setAllLocations(response.data.locations)
      } else {
        console.warn("Failed to fetch locations:", response.message)
        setAllLocations([])
      }
    } catch (error) {
      console.error("Error fetching locations:", error)
      setAllLocations([])
    }
  }

  const getDataTableHandler = useCallback(async () => {
    setLoading(true)
    try {
      const response = await apiService.getTableData(city, year, month)
      console.log("API Response:", response)

      if (response.success && response.data) {
        console.log("Raw response data:", response.data)

        // Check if data has the expected structure
        if (response.data.sf && Array.isArray(response.data.sf)) {
          // Transform SF data to ensure it has the expected structure
          const transformedSFData = response.data.sf.map((item: any) => {
            // If the item already has pricerange, use it; otherwise use index
            const pricerange = item.pricerange || item.index || 'Unknown';

            return {
              pricerange: pricerange,
              "Pending/ Signed Contract": item["Pending/ Signed Contract"] ?? 0,
              "Price Adjustments": item["Price Adjustments"] ?? 0,
              "Sold and Closed": item["Sold and Closed"] ?? 0,
              "New Listings": item["New Listings"] ?? 0,
              "DOM": item["DOM"] ?? 0,
              "List to Close +/-": item["List to Close +/-"] ?? 0,
              "Total Actives": item["Total Actives"] ?? 0,
              "Change from Last Month": item["Change from Last Month"] ?? "0%",
              "Previous 3 Months Change": item["Previous 3 Months Change"] ?? 0,
              "Trending < >": item["Trending < >"] ?? "→",
              "LAST MONTH": item["LAST MONTH"] ?? null,
              "LAST QUARTER": item["LAST QUARTER"] ?? null,
              "LAST YEAR": item["LAST YEAR"] ?? null,
            };
          });

          // Sort SF data by price range in ascending order
          const sortedSFData = transformedSFData.sort((a: any, b: any) => {
            // Extract numeric values from price range strings for comparison
            const getPriceValue = (priceRange: string) => {
              // Handle different price range formats
              if (priceRange.includes('M+')) {
                const match = priceRange.match(/(\d+)M\+/);
                return match ? parseInt(match[1]) * 1000000 : 0;
              } else if (priceRange.includes('–')) {
                const match = priceRange.match(/(\d+)–(\d+)M/);
                return match ? parseInt(match[1]) * 1000000 : 0;
              } else {
                // Handle traditional format like $100,000
                const match = priceRange.match(/\$?([\d,]+)/);
                return match ? parseInt(match[1].replace(/,/g, '')) : 0;
              }
            };
            return getPriceValue(a.pricerange) - getPriceValue(b.pricerange);
          });
          console.log("sortedSFData : ", sortedSFData)
          setSFData(sortedSFData)
        } else {
          console.warn("SF data not found or not an array:", response.data.sf)
          setSFData([])
        }

        // Check if data has the expected structure
        if (response.data.condo && Array.isArray(response.data.condo)) {
          // Transform condo data to match expected component structure
          const transformedCondoData = response.data.condo.map((item: any) => ({
            pricerange: item.pricerange || item.index || 'Unknown',
            "Pending/ Signed Contract": item["Pending/ Signed Contract"] ?? 0,
            "Price Adjustments": item["Price Adjustments"] ?? 0,
            "Sold and Closed": item["Sold and Closed"] ?? 0,
            "New Listings": item["New Listings"] ?? 0,
            "DOM": item["DOM"] ?? 0,
            "List to Close +/-": item["List to Close +/-"] ?? 0,
            "Total Actives": item["Total Actives"] ?? 0,
            "Change from Last Month": item["Change from Last Month"] ?? "0%",
            "Previous 3 Months Change": item["Previous 3 Months Change"] ?? 0,
            "Trending < >": item["Trending < >"] ?? "→",
            "LAST MONTH": item["LAST MONTH"] ?? null,
            "LAST QUARTER": item["LAST QUARTER"] ?? null,
            "LAST YEAR": item["LAST YEAR"] ?? null,
          }));

          // Sort Condo data by price range in ascending order
          const sortedCondoData = transformedCondoData.sort((a: any, b: any) => {
            // Extract numeric values from price range strings for comparison
            const getPriceValue = (priceRange: string) => {
              // Handle different price range formats
              if (priceRange.includes('M+')) {
                const match = priceRange.match(/(\d+)M\+/);
                return match ? parseInt(match[1]) * 1000000 : 0;
              } else if (priceRange.includes('–')) {
                const match = priceRange.match(/(\d+)–(\d+)M/);
                return match ? parseInt(match[1]) * 1000000 : 0;
              }
              return 0;
            };
            return getPriceValue(a.pricerange) - getPriceValue(b.pricerange);
          });
          console.log("sortedCondoData : ", sortedCondoData)
          setContraData(sortedCondoData)
        } else {
          console.warn("Condo data not found or not an array:", response.data.condo)
          setContraData([])
        }
      } else {
        console.error("API call failed:", response.message)
        setSFData([])
        setContraData([])
      }
    } catch (error) {
      console.error("Error fetching table data:", error)
      setSFData([])
      setContraData([])
    } finally {
      setLoading(false)
    }
  }, [city, year, month])

  useEffect(() => {
    getAllLocationsHandler()
  }, [])

  useEffect(() => {
    getDataTableHandler()
  }, [getDataTableHandler])

  return (
    <div className="min-h-screen bg-[#F1EFED] font-sans text-[#1F1F1E]">
      <Navbar />

      <Hero />
      {/* <LandingHighlights /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Form */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4">
            {/* City Selection */}
            <div className="w-full md:w-auto min-w-[200px]">
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger className="w-full bg-[#3A3B40] text-white border-none h-12 text-xs font-semibold tracking-[0.15em] uppercase rounded-none hover:bg-[#2C2D31] transition-colors">
                  <SelectValue placeholder="Select a city" />
                </SelectTrigger>
                <SelectContent className="bg-[#3A3B40] text-white border-none rounded-none">
                  <SelectItem value="Houston" className="focus:bg-[#4A4B50] focus:text-white">Houston</SelectItem>
                  {allLocations.filter((location: string) => location !== "Houston").map((location: string) => (
                    <SelectItem key={location} value={location} className="focus:bg-[#4A4B50] focus:text-white">
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Year Selection */}
            <div className="w-full md:w-auto min-w-[140px]">
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="w-full bg-white border border-[#D6D1CA] text-[#1F1F1E] h-12 text-xs font-semibold tracking-[0.15em] uppercase rounded-none hover:border-[#8B8379] transition-colors">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#D6D1CA] rounded-none">
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Month Selection */}
            <div className="w-full md:w-auto min-w-[160px]">
              <Select value={month} onValueChange={setMonth}>
                <SelectTrigger className="w-full bg-white border border-[#D6D1CA] text-[#1F1F1E] h-12 text-xs font-semibold tracking-[0.15em] uppercase rounded-none hover:border-[#8B8379] transition-colors">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#D6D1CA] rounded-none">
                  <SelectItem value="1">January</SelectItem>
                  <SelectItem value="2">February</SelectItem>
                  <SelectItem value="3">March</SelectItem>
                  <SelectItem value="4">April</SelectItem>
                  <SelectItem value="5">May</SelectItem>
                  <SelectItem value="6">June</SelectItem>
                  <SelectItem value="7">July</SelectItem>
                  <SelectItem value="8">August</SelectItem>
                  <SelectItem value="9">September</SelectItem>
                  <SelectItem value="10">October</SelectItem>
                  <SelectItem value="11">November</SelectItem>
                  <SelectItem value="12">December</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          <SF data={sfData} loading={loading} city={city} />
          <Condo data={contraData} loading={loading} city={city} />
          <MarketMethodologyPanel />
        </div>

        <div className="mt-16 pt-8 border-t border-[#D6D1CA]">
          <p className='text-[#8B8379] text-[10px] font-normal uppercase leading-relaxed tracking-wide text-justify'>
            *Market Area Information obtained from Houston Association of Realtors (HAR). Statistics are subject to change due to individual real estate company reporting disciplines. 2800 KIRBY DRIVE, SUITE A-206, HOUSTON, TEXAS 77098. 281.652.5588. © 2025 DOUGLAS ELLIMAN REAL ESTATE. ALL MATERIAL PRESENTED HEREIN IS INTENDED FOR INFORMATION PURPOSES ONLY. WHILE THIS INFORMATION IS BELIEVED TO BE CORRECT; IT IS REPRESENTED SUBJECT TO ERRORS, OMISSION, CHANGES, OR WITHDRAWAL WITHOUT NOTICE. ALL PROPERTY INFORMATION, INCLUDING, BUT NOT LIMITED TO SQUARE FOOTAGE, ROOM COUNT, NUMBER OF BEDROOMS AND THE SCHOOL DISTRICT IN PROPERTY LISTINGS ARE DEEMED RELIABLE, BUT SHOULD BE VERIFIED BY THE SALES ASSOCIATE'S OWN ATTORNEY, ARCHITECT OR ZONING EXPERT. EQUAL HOUSING OPPORTUNITY.
            <img src={Home_Des_Icon} alt="Home_Des_Icon" className="inline ml-2 h-3 w-auto opacity-50" />
          </p>
        </div>
      </div>



      <Footer />
    </div>
  );
};

export default Tables;
