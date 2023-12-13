/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


// **First Version**
/**
 * **Sample React Native App - First Version**
 */

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [apiResult, setApiResult] = useState(null);

  const saveAPIData = async () => {
    console.warn("test");

    const data = {
      name: "Amol D",
      age: 31,
      email: "amolD@test.com"
    };
    const url = "http://127.0.0.1:3000/users";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    result = await result.json();
    console.warn(result);
    setApiResult(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post API Call</Text>
      <TouchableOpacity style={styles.button} onPress={saveAPIData}>
        <Text style={styles.buttonText}>Save Data</Text>
      </TouchableOpacity>

      {apiResult && (
        <View style={styles.resultContainer}>
          <Text>ID: {apiResult.id}</Text>
          <Text>Name: {apiResult.name}</Text>
          <Text>Age: {apiResult.age}</Text>
          <Text>Email: {apiResult.email}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default App;



// **Second Version**
/**
 * **Sample React Native App - Second Version**
 */ 

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const App = () => {
//   const [apiResult, setApiResult] = useState(null);

//   const saveAPIData = async () => {
//     console.log("Before API call");

//     const data = {
//       name: "AMO",
//       age: 31,
//       email: "AMO@test.com"
//     };

//     const url = "http://localhost:3000/users";

//     try {
//       let result = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       console.log("After API call");

//       console.log("Response Status:", result.status);

//       const responseBody = await result.text(); // Store the response text
//       console.log("Response Body:", responseBody);

//       result = JSON.parse(responseBody); // Parse the stored text as JSON
//       console.warn(result);
//       setApiResult(result);
//     } catch (error) {
//       console.error("Error calling API:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Post API Call</Text>
//       <TouchableOpacity style={styles.button} onPress={saveAPIData}>
//         <Text style={styles.buttonText}>Save Data</Text>
//       </TouchableOpacity>

//       {apiResult && (
//         <View style={styles.resultContainer}>
//           <Text>ID: {apiResult.id}</Text>
//           <Text>Name: {apiResult.name}</Text>
//           <Text>Age: {apiResult.age}</Text>
//           <Text>Email: {apiResult.email}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 30,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#3498db',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   resultContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
// });

//export default App;
