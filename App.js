// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { GoalInput } from './components/GoalInput';
// import { GoalItem } from './components/GoalItem';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    // console.log(enteredGoalText);
    setCourseGoals((courentCourseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const delateGoalHandler = (id) => {
    setCourseGoals((courentCourseGoals) => {
      return courentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <View style={styles.appContainer}>
        <GoalInput onAddGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={delateGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
