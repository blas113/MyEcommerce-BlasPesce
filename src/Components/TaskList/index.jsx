import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import RenderItemTask from './RenderItemTask'

export default function TaskList(list,onPressTask) {
  return (
    <View style={styles.view2}>
        <FlatList
            data = {list}
            keyExtractor={task => task.id}
            renderItem={({item}) => RenderItemTask({item, onPressTask})}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    view2: {
        height: "88%",
        backgroundColor: "darkcyan",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 15,
    },

})