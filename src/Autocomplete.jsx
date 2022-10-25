import { Box, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { matchSorter } from "match-sorter";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Autocomplete = () => {
  const data = [
    {
      "Generic Name":
        "Amoxycillin 200mg and Potassium Clavulanate 28.5mg Oral Suspension IP per 5ml",
      "Unit Size": "30 ml",
      MRP: "27",
    },
    {
      "Generic Name": "Roxithromycin Tablets IP 150 mg",
      "Unit Size": "10's",
      MRP: "28",
    },
    {
      "Generic Name": "Ciprofloxacin Hydrochloride Tablets IP 500 mg",
      "Unit Size": "10's",
      MRP: "18",
    },
    {
      "Generic Name": "Aciclovir Tablets IP 400 mg",
      "Unit Size": "10's",
      MRP: "40",
    },
    {
      "Generic Name": "Cefoperazone 1g and Sulbactam 1g Injection",
      "Unit Size": "Vial & wfi",
      MRP: "80",
    },
    {
      "Generic Name": "Cefotaxime Sodium Injection IP 1g",
      "Unit Size": "Vial & wfi",
      MRP: "17",
    },
    {
      "Generic Name": "Ampicillin Injection IP 500 mg",
      "Unit Size": "Vial",
      MRP: "7",
    },
    {
      "Generic Name": "Mannitol Injection IP 20% w/v",
      "Unit Size": "100 ml",
      MRP: "28",
    },
    {
      "Generic Name": "Allopurinol Tablets IP 100 mg",
      "Unit Size": "10's",
      MRP: "10",
    },
    {
      "Generic Name": "Azithromycin Tablets IP 250 mg",
      "Unit Size": "6's",
      MRP: "45",
    },
    {
      "Generic Name": "Diclofenac Sodium 50mg and Paracetamol 325mg Tablets IP",
      "Unit Size": "10's",
      MRP: "9",
    },
    {
      "Generic Name":
        "Amoxycillin 1g and Potassium Clavulanate 200mg Injection IP",
      "Unit Size": "Vial & wfi",
      MRP: "58",
    },
    {
      "Generic Name": "Ceftriaxone 1g and Sulbactam 500mg Injection",
      "Unit Size": "Vial & wfi",
      MRP: "44",
    },
    {
      "Generic Name": "Metronidazole Tablets IP 200mg",
      "Unit Size": "10's",
      MRP: "4",
    },
    {
      "Generic Name": "Metronidazole Tablets IP 400mg",
      "Unit Size": "10's",
      MRP: "6",
    },
    {
      "Generic Name": "Etophyllin 77mg and Theophylline 23mg Tablets",
      "Unit Size": "10's",
      MRP: "5",
    },
    {
      "Generic Name": "Paracetamol Tablets IP 650 mg",
      "Unit Size": "15's",
      MRP: "12",
    },
    {
      "Generic Name":
        "Metformin Hydrochloride Prolonged release Tablets IP 500 mg",
      "Unit Size": "10's",
      MRP: "11",
    },
    {
      "Generic Name": "Doxycycline Capsules IP 100mg",
      "Unit Size": "10's",
      MRP: "13",
    },
    {
      "Generic Name": "Fluoxetine Hydrochloride Capsules IP 20mg",
      "Unit Size": "10's",
      MRP: "8",
    },
    {
      "Generic Name":
        "Metformin Hydrochloride 500mg (Sustained release) and Glimepiride 2mg Tablets",
      "Unit Size": "15's",
      MRP: "24",
    },
    {
      "Generic Name":
        "Amoxycillin 250mg and Potassium Clavulanate 50mg Injection IP",
      "Unit Size": "Vial & wfi",
      MRP: "28",
    },
    {
      "Generic Name":
        "Vitamin B-Complex Tablets (B1 10mg, B2 10mg, B3 45mg, B5 50mg, B6 3mg, B12 15mcg)",
      "Unit Size": "10's",
      MRP: "18",
    },
    {
      "Generic Name": "Montelukast Sodium Tablets IP 5mg",
      "Unit Size": "10's",
      MRP: "15",
    },
    {
      "Generic Name": "Carbimazole Tablets IP 10 mg",
      "Unit Size": "100's",
      MRP: "77",
    },
    {
      "Generic Name":
        "Dicyclomine Hydrochloride 10mg and Simethicone 40mg Oral Drops",
      "Unit Size": "10 ml Bottle",
      MRP: "10",
    },
    {
      "Generic Name": "Piroxicam Dispersible Tablets 20 mg",
      "Unit Size": "10's",
      MRP: "21",
    },
    {
      "Generic Name": "Flunarizine Tablets 10 mg",
      "Unit Size": "10's",
      MRP: "7",
    },
    {
      "Generic Name": "Fluticasone 50mcg and Azelastine 140mcg Nasal Spray",
      "Unit Size": "70 MD",
      MRP: "190",
    },
    {
      "Generic Name":
        "Cefotaxime Sodium 1g and Sulbactam Sodium 500mg Injection",
      "Unit Size": "Vial & wfi",
      MRP: "25",
    },
    {
      "Generic Name": "Ofloxacin Tablets IP 400mg",
      "Unit Size": "10's",
      MRP: "35",
    },
    {
      "Generic Name": "Pantoprazole Gastro Resistant Tablets IP 40 mg",
      "Unit Size": "10's",
      MRP: "11",
    },
    {
      "Generic Name": "Enoxaparin Injection IP 60 mg per 0.6 ml",
      "Unit Size": "0.6 ml",
      MRP: "198",
    },
    {
      "Generic Name": "Acarbose Tablets IP 50 mg",
      "Unit Size": "10's",
      MRP: "62",
    },
    {
      "Generic Name": "Gliclazide Tablets IP 80 mg",
      "Unit Size": "10's",
      MRP: "22",
    },
    {
      "Generic Name":
        "Montelukast Sodium 10mg and Levocetirizine 5mg Tablets IP",
      "Unit Size": "10's",
      MRP: "18",
    },
    {
      "Generic Name": "Amiodarone Tablets IP 200 mg",
      "Unit Size": "10's",
      MRP: "59",
    },
    {
      "Generic Name": "Indapamide Tablets IP 1.5 mg",
      "Unit Size": "10's",
      MRP: "26",
    },
    {
      "Generic Name": "Ferrous Ascorbate 100mg and Folic Acid 1.5mg Tablets",
      "Unit Size": "10's",
      MRP: "21",
    },
    {
      "Generic Name": "Formoterol 6mcg and Budesonide 200mcg Rotacaps",
      "Unit Size": "30's",
      MRP: "85",
    },
    {
      "Generic Name":
        "Calcium Carbonate 500mg, Calcitriol 0.25mcg and Zinc 7.5mg Capsules",
      "Unit Size": "10's",
      MRP: "18",
    },
  ];

  const INITIAL_VALUES = data.slice(0,6)

  const [medicine, setMedicine] = useState("")
  const [matchedValues, setMatchedValues] = useState(INITIAL_VALUES)
  const [suggestionVisible, setSuggestionVisible] = useState(false)

  const handleInputChange = (e) => {
    setMedicine(e.target.value)
    setMatchedValues(matchSorter(data, e.target.value, {keys: ["Generic Name"]}))
    if(e.target.value === ""){
        setMatchedValues(INITIAL_VALUES)
    }
  }

  const handleMedicineClick = (med) =>{
    setMedicine(med["Generic Name"])
  }

  useEffect(()=>{
    console.log(medicine)
  },[medicine])

  return (
    <VStack w="400px">
      <Input w="100%" value={medicine} onChange={handleInputChange} onFocus={()=>setSuggestionVisible(true)} onBlur={()=>setSuggestionVisible(false)} />
      <Box w="400px" display={suggestionVisible ? "flex" : "none"} flexDir="column" border='1px solid black' style={{borderCollapse: "collapse"}}>
        {
            matchedValues.map((value, index)=>{
                return(
                    <Box key={index} _hover={{background: "#f2f2f2"}} overflow="hidden" whiteSpace="nowrap" borderBottom="1px solid black" cursor="pointer" py={2} m={0} w="100%" onClick={() => handleMedicineClick(value)}>
                       {value["Generic Name"]}
                    </Box>
                )
            })
        }
      </Box>
    </VStack>
  );
};

export default Autocomplete;
