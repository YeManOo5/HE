import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import quesa from '../data/quesa'
import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";


const _ = require("lodash");
const data = _.shuffle(quesa);

const Qa = () => {
  const navigation = useNavigation();
  

  const totalQuestions = data.length;
  // points
  const [points, setPoints] = useState(0);

  // index of the question
  const [index, setIndex] = useState(0);

  // answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  // answers
  const [answers, setAnswers] = useState([]);

  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // Counter
  const [counter, setCounter] = useState(15);

  // interval
  let interval = null;

  // progress bar
  const progressPercentage = Math.floor((index / totalQuestions) * 100);



  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((state) => state - 1);
      }
      if (counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
    };

    interval = setTimeout(myInterval, 99999999999999);

    // clean up
    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      clearTimeout(interval)
      navigation.navigate("Results", {
        answers: answers,
        points: points,
      });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]); 

  const currentQuestion = data[index];
  console.log(answerStatus)

  return (
    <ScrollView style={{ backgroundColor: '#BDCDD6' }}>
      <View style={styles.body}>
        <Text style={styles.Text}>Quiz Challenge</Text>

      </View>
      <View style={styles.body1}>
        <Text style={styles.Text} >your Progress</Text>
        <Text style={styles.Text} > ({index}/{totalQuestions})questions answered</Text>
      </View>
      {/* Progress Bar */}
      <View
        style={{
          backgroundColor: "#EEE9DA",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          height: 10,
          borderRadius: 20,
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 5,
          
        }}
      >
        <Text
          style={{
            backgroundColor: "#4a2742",
            borderRadius: 12,
            position: "absolute",
            left: 0,
            height: 10,
            right: 0,
            width: `${progressPercentage}%`,
            marginTop: 20,
          }}
        />
      </View>
      <View style={{ backgroundColor: '#EEE9DA', marginTop: 30 }}>
        <Text style={styles.que} >{currentQuestion?.question}</Text>

        <View>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)}
              style={
                selectedAnswerIndex === index &&
                  index === currentQuestion.correctAnswerIndex
                  ? {
                    flexDirection: 'row', alignItems: 'center', borderColor: '#00ffff',
                    borderWidth: 1, borderRadius: 40, marginVertical: 15,
                    backgroundColor: "#89d09c",elevation: 8,

                  }
                  : selectedAnswerIndex != null && selectedAnswerIndex === index
                    ? {
                      flexDirection: 'row', alignItems: 'center', borderColor: '#00ffff',
                      borderWidth: 1, borderRadius: 40, marginVertical: 15,
                      backgroundColor: "#feb7ae",elevation: 8,

                    }
                    : {
                      flexDirection: 'row', alignItems: 'center', borderColor: '#feb7ae',
                      borderWidth: 1, borderRadius: 40, marginVertical: 15,
                    }
              }
            >
              {selectedAnswerIndex === index &&
                index === currentQuestion.correctAnswerIndex ? (
                <Image source={require('../assets/true.png')}
                  style={styles.ansb}
                />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                <Image source={require('../assets/false.png')}
                  style={styles.ansb}

                />
              ) : (
                <Text style={styles.ansb}>{item.options}</Text>
              )}


              <Text style={styles.ans}>{item.answer}</Text>
            </Pressable>

          ))}
        </View>
      </View>
      <View style={
        answerStatus === null
          ? null
          : {
            marginTop: 45,
            backgroundColor: !!answerStatus ? "#89d09c" : "#feb7ae",
            padding: 10,
            borderRadius: 7,
            height: 120,
          }
      }
      >
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus == null
                ? null
                : { fontSize: 27, textAlign: "center", fontWeight: "bold", color: 'black' }
            }
          >
            {!!answerStatus ? "Correct Answer" : "Wrong Answer"}

          </Text>
        )}

        {(answerStatus && (index + 1 == data.length)) ? (
          <Pressable
            onPress={() =>
              navigation.navigate("Results", {
                points: points,

                answers: answers,
              })
            }
            style={{
              backgroundColor: "#42a760",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 15,
              borderRadius: 6,
              alignSelf: 'flex-end',
              elevation: 8,

            }}
          >

            <Text style={{ color: "white", fontSize: 20, }}>Done</Text>
          </Pressable>


        )
          : answerStatus === null ? null : (
            <Pressable
              onPress={() => setIndex(index + 1)}
              style={{
                backgroundColor: "#42a760",
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 20,
                borderRadius: 6,
                elevation: 8,
                marginTop: 15,
              }}
            >
              <Text style={{ color: "white", fontSize: 20, }}>Next Question</Text>
            </Pressable>
          )}
      </View>

    </ScrollView>
  )
}

export default Qa

const styles = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: '#BDCDD6',
    marginTop: 20,
    alignItems: 'center',

  },
  body1: {
    flex: 1,
    backgroundColor: '#BDCDD6',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Text: {
    color: '#41273b',
    fontSize: 27,
    margin: 20,
    fontWeight: 'bold'
  },

  que: {
    fontSize: 20,
    color: '#41273b',
    margin: 15,
    fontWeight: 'bold'
  },
  ansb: {
    fontSize: 16,
    color: '#41273b',
    margin: 7,
    borderColor: '#00ffff',
    borderWidth: 1,
    textAlign: 'center',
    width: 40,
    height: 40,
    borderRadius: 40,
    padding: 10,
    borderRadius: 20,

  },
  ans: {
    fontSize: 20,
    color: '#070A18',
    margin: 7,
    marginLeft: 12,
  },

  point: {
    color: 'black',
    fontSize: 20,
    margin: 20,
  },

  radio: {
    elevation: 8,
    width: '70%',
    height: 69,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4a2742',
    elevation: 8,
    marginRight: '6%',
    alignSelf: 'flex-end',
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  }

})