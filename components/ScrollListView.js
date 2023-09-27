import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { ScrollView } from "react-native";

export function ScrollListView() {
  console.log("CALLED");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function randomScrollView() {
      setIsLoading(true);
      const url = "https://randomuser.me/api/?results=100";
      try {
        const { data } = await axios.get(url);
        setData(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    randomScrollView();
  }, []);

  return (
    <ScrollView>
      {data.map((people) => {
        return (
          <Text>
            {people.name.first} {people.name.last}
          </Text>
        );
      })}
      <Text>Scroll list page</Text>
    </ScrollView>
  );
}
