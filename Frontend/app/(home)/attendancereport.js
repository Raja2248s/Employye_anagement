// // // import { Pressable, StyleSheet, Text, View } from "react-native";
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // import { Ionicons } from "@expo/vector-icons";
// // // import { AntDesign } from "@expo/vector-icons";
// // // import { useRouter } from "expo-router";
// // // import SearchResults from "../../components/SearchResults";
// // // import { TextInput } from "react-native-paper";

// // // const attendancereport = () => {
// // //   const [employee, setEmployee] = useState([]);
// // //   const [input, setInput] = useState("");
// // //   const router = useRouter();
// // //   useEffect(() => {
// // //     const fetchEmployeeData = async () => {
// // //       try {
// // //         const response = await axios.get(
// // //           "http://192.168.164.217:8000/employees"
// // //         );

// // //         setEmployee(response.data);
// // //       } catch (error) {
// // //         if (error.response) {
// // //           // The request was made and the server responded with a status code
// // //           console.error("Server responded with status:", error.response.status);
// // //         } else if (error.request) {
// // //           // The request was made but no response was received
// // //           console.error("No response received:", error.request);
// // //         } else {
// // //           // Something else happened while setting up the request
// // //           console.error("Error setting up request:", error.message);
// // //         }
// // //         console.error("Error details:", error.config);
// // //         console.log("error fetching employee data", error);
// // //       }
// // //     };
// // //     fetchEmployeeData();
// // //   }, []);

// // //   return (
// // //     // <View>
// // //     //   <Text>attendancereport</Text>
// // //     // </View>
// // //     <View style={{ flex: 1, backgroundColor: "white" }}>
// // //       <View
// // //         style={{
// // //           flexDirection: "row",
// // //           alignItems: "center",
// // //           backgroundColor: "white",
// // //         }}
// // //       >
// // //         <Ionicons
// // //           onPress={() => router.back()}
// // //           style={{ marginLeft: 10 }}
// // //           name="arrow-back"
// // //           size={24}
// // //           color="black"
// // //         />
// // //         <Pressable
// // //           style={{
// // //             flexDirection: "row",
// // //             alignItems: "center",
// // //             marginHorizontal: 7,
// // //             gap: 10,
// // //             backgroundColor: "white",
// // //             borderRadius: 3,
// // //             height: 40,
// // //             flex: 1,
// // //           }}
// // //         >
// // //           <AntDesign
// // //             style={{ marginLeft: 10 }}
// // //             name="search1"
// // //             size={20}
// // //             color="black"
// // //           />
// // //           <TextInput
// // //             value={input}
// // //             onChangeText={(text) => setInput(text)}
// // //             style={{ flex: 1 }}
// // //             placeholder="Search"
// // //           />

// // //           {employee.length > 0 && (
// // //             <View>
// // //               <Pressable onPress={() => router.push("/(home)/adddetails")}>
// // //                 <AntDesign name="pluscircle" size={30} color="#0072b1" />
// // //               </Pressable>
// // //             </View>
// // //           )}
// // //         </Pressable>
// // //       </View>

// // //       {employee.length > 0 ? (
// // //         <SearchResults data={employee} input={input} setInput={setInput} />
// // //       ) : (
// // //         <View
// // //           style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
// // //         >
// // //           <Text>No Data</Text>
// // //           <Text>Press on the plus button and add your Employee</Text>
// // //           <Pressable onPress={() => router.push("/(home)/adddetails")}>
// // //             <AntDesign
// // //               style={{ marginTop: 30 }}
// // //               name="pluscircle"
// // //               size={24}
// // //               color="black"
// // //             />
// // //           </Pressable>
// // //         </View>
// // //       )}
// // //     </View>
// // //   );
// // // };

// // // export default attendancereport;

// // // const styles = StyleSheet.create({});

// // import { Pressable, StyleSheet, Text, View } from "react-native";
// // import React, { useState, useEffect } from "react";
// // import moment from "moment";
// // import axios from "axios";
// // import { AntDesign } from "@expo/vector-icons";
// // import EmployeePieChart from "./EmployeePieChart";
// // import { useRouter } from "expo-router";

// // const attendancereport = () => {
// //     const router = useRouter();
// //     const [currentDate, setCurrentDate] = useState(moment());
// //     const [employees, setEmployees] = useState([]);
// //     const [attendance, setAttendance] = useState([]);

// //     const goToNextDay = () => {
// //       const nextDate = moment(currentDate).add(1, "days");
// //       setCurrentDate(nextDate);
// //     };

// //     const goToPrevDay = () => {
// //       const prevDate = moment(currentDate).subtract(1, "days");
// //       setCurrentDate(prevDate);
// //     };

// //     const formatDate = (date) => {
// //       return date.format("MMMM D, YYYY");
// //     };

// //     useEffect(() => {
// //       const fetchEmployeeData = async () => {
// //         try {
// //           const response = await axios.get("http://192.168.164.217:8000/employees");
// //           setEmployees(response.data);
// //         } catch (error) {
// //           console.log("error fetching employee data", error);
// //         }
// //       };
// //       fetchEmployeeData();
// //     }, []);

// //     const fetchAttendanceData = async () => {
// //       try {
// //         const response = await axios.get("http://192.168.164.217:8000/attendance", {
// //           params: {
// //             date: currentDate.format("MMMM D, YYYY"),
// //           },
// //         });
// //         setAttendance(response.data);
// //       } catch (error) {
// //         console.log("error fetching attendance data", error);
// //       }
// //     };

// //     useEffect(() => {
// //       fetchAttendanceData();
// //     }, [currentDate]);

// //     const employeeWithAttendance = employees.map((employee) => {
// //       const attendanceRecord = attendance.find((record) => record.employeeId === employee.employeeId);

// //       return {
// //         ...employee,
// //         status: attendanceRecord ? attendanceRecord.status : "", // 'Not Marked' or a default status
// //       };
// //     });

// //   return (
// //     <View style={{ flex: 1, backgroundColor: "white" }}>
// //       {/* Your existing code */}
// //       <View style={{ marginHorizontal: 12 }}>
// //         {employeeWithAttendance.map((item, index) => (
// //           <Pressable
// //             onPress={() => router.push({ pathname: "/chart", params: {...} })}
// //             key={index}
// //             style={{ flexDirection: "row", alignItems: "center", gap: 10, marginVertical: 10 }}
// //           >
// //             {/* Your existing code */}
// //             {/* Display the EmployeePieChart for each employee */}
// //             <EmployeePieChart employeeData={item} />
// //           </Pressable>
// //         ))}
// //       </View>
// //     </View>
// //   );
// // };

// // export default attendancereporte;

// // const styles = StyleSheet.create({});

// import { Pressable, StyleSheet, Text, View } from "react-native";
// import React, { useState, useEffect } from "react";
// import moment from "moment";
// import axios from "axios";
// import { AntDesign } from "@expo/vector-icons";
// // Import your EmployeePieChart component
// import { useRouter } from "expo-router";
// import Chart from "./Chart";
// // import { chart } from "./chart";
// // import Chart from "chart.js";
// // import Chart from "../../components/Chart";

// const attendancereport = () => {
//   const router = useRouter();
//   const [currentDate, setCurrentDate] = useState(moment());
//   const [employees, setEmployees] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   useEffect(() => {
//     const fetchEmployeeData = async () => {
//       try {
//         const response = await axios.get("http://192.168.137.1:8000/employees");
//         setEmployees(response.data);
//       } catch (error) {
//         console.log("error fetching employee data", error);
//       }
//     };
//     fetchEmployeeData();
//   }, []);

//   const fetchAttendanceData = async () => {
//     try {
//       const response = await axios.get("http://192.168.137.1:8000/attendance", {
//         params: {
//           date: currentDate.format("MMMM D, YYYY"),
//         },
//       });
//       setAttendance(response.data);
//     } catch (error) {
//       console.log("error fetching attendance data", error);
//     }
//   };

//   useEffect(() => {
//     fetchAttendanceData();
//   }, [currentDate]);

//   const employeeWithAttendance = employees.map((employee) => {
//     const attendanceRecord = attendance.find(
//       (record) => record.employeeId === employee.employeeId
//     );

//     return {
//       ...employee,
//       status: attendanceRecord ? attendanceRecord.status : "", // 'Not Marked' or a default status
//     };
//   });

//   return (
//     <View style={styles.container}>
//       <View style={styles.employeeList}>
//         {employeeWithAttendance.map((item, index) => (
//           <Pressable
//             onPress={() =>
//               router.push({
//                 pathname: "/Chart",
//                 query: { name: item.employeeName },
//               })
//             }
//             key={index}
//             style={styles.employeeItem}
//           >
//             {/* Display the EmployeePieChart for each employee */}

//             <Chart employeeData={item} />
//             <Text style={styles.employeeName}>{item.employeeName}</Text>
//             <Text style={styles.employeeId}>{item.employeeId}</Text>
//           </Pressable>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default attendancereport;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingHorizontal: 16,
//   },
//   employeeList: {
//     marginTop: 20,
//   },
//   employeeItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     backgroundColor: "#f0f0f0",
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   employeeName: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   employeeId: {
//     fontSize: 14,
//     color: "#666",
//   },
//   // Add more styles for other employee information if needed
// });
import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Chart } from "chart.js";

const Attendancereport = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(moment());
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);

  const employeeWithAttendance = employees.map((employee) => {
    const attendanceRecord = attendance.find(
      (record) => record.employeeId === employee.employeeId
    );

    return {
      ...employee,
      status: attendanceRecord ? attendanceRecord.status : "", // 'Not Marked' or a default status
    };
  });
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://192.168.137.1:8000/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log("error fetching employee data", error);
      }
    };
    fetchEmployeeData();
  }, []);

  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get("http://192.168.137.1:8000/attendance", {
        params: {
          date: currentDate.format("MMMM D, YYYY"),
        },
      });
      setAttendance(response.data);
    } catch (error) {
      console.log("error fetching attendance data", error);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, [currentDate]);

  const handleEmployeePress = (employee) => {
    router.push({
      pathname: "/chart",
      query: { employeeData: JSON.stringify(employee) },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.employeeList}>
        {employeeWithAttendance.map((item, index) => (
          <Pressable
            onPress={() => handleEmployeePress(item)}
            key={index}
            style={styles.employeeItem}
          >
            <Text style={styles.employeeName}>{item.employeeName}</Text>
            <Text style={styles.employeeId}>{item.employeeId}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Attendancereport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
  employeeList: {
    marginTop: 20,
  },
  employeeItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 10,
  },
  employeeName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  employeeId: {
    fontSize: 14,
    color: "#666",
  },
});
