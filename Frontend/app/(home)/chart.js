// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const chart = () => {
//   return (
//     <View>
//       <Text>chart</Text>
//     </View>
//   )
// }

// export default chart

// const styles = StyleSheet.create({})

import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { PieChart } from "react-native-chart-kit";
import moment from "moment";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  style: {
    fontSize: 10,
  },
};

const chart = ({ employeeData }) => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentDate, setCurrentDate] = useState(moment());
  const fetchAttendanceReport = async () => {
    try {
      const respone = await axios.get(
        `http://192.168.137.1:8000/attendance-report-all-employees`,
        {
          params: {
            month: 5,
            year: 2024,
          },
        }
      );

      setAttendanceData(respone.data.report);
    } catch (error) {
      console.log("Error fetching attendance");
    }
  };
  useEffect(() => {
    fetchAttendanceReport();
  }, []);
  //   const data = [
  //     {
  //       name: "Working Days",
  //       population: employeeData?.present,
  //       color: "#2E8B57",
  //       legendFontColor: "#7F7F7F",
  //       legendFontSize: 1r5,
  //     },
  //     {
  //       name: "Holidays",
  //       population: employeeData.present,
  //       color: "#FF6347",
  //       legendFontColor: "#7F7F7F",
  //       legendFontSize: 15,
  //     },
  //     {
  //       name: "Half-Holidays",
  //       population: employeeData.present,
  //       color: "#FFD700",
  //       legendFontColor: "#7F7F7F",
  //       legendFontSize: 15,
  //     },
  //     {
  //       name: "Absentees",
  //       population: employeeData.present,
  //       color: "#DC143C",
  //       legendFontColor: "#7F7F7F",
  //       legendFontSize: 15,
  //     },
  //   ];
  const data = attendanceData.map((item) => ({
    name: item.name,
    population: item.present,
    color: "#2E8B57",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  }));

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 20,
          fontWeight: "700",
          marginTop: 20,
        }}
      >
        's Attendance
      </Text>
      <PieChart
        data={data}
        width={Dimensions.get("window").width}
        height={300}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[20, 40]}
        absolute
      />
    </View>
  );
};

export default chart;

const styles = StyleSheet.create({});
