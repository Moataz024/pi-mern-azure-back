const mongoose = require('mongoose');

const Schema = mongoose.Schema
// const GoalSchema = new Schema({
//   goalNumber: {
//       type: Number,
//       required: true
//   },
//   time: {
//       type: String, // Assuming time will be stored as a string (e.g., "45'")
//       required: true
//   }
// });
const Result = new Schema({
    match: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Match',
        required: true
      },
      // team1Goals: [GoalSchema],
      // team2Goals: [GoalSchema],

      team1Goals: [{
        //time: { type: String }, // Time of the goal
        type: Number,
        required: true
    }],
    team2Goals: [{
        //time: { type: String }, // Time of the goal
        type: Number,
        required: true
    }],
      // team1Goals: {
      //   type: Number,
      //   required: true
      // },
      // team2Goals: {
      //   type: Number,
      //   required: true
      // },
      team1Red: {
        type: Number,
        default: 0      },
      team2Red: {
        type: Number,
        default: 0      },
      team1Yellow: {
        type: Number,
        default: 0      },
      team2Yellow: {
        type: Number,
        default: 0      },
      team1Corners: {
        type: Number,
        default: 0      },
      team2Corners: {
        type: Number,
        default: 0      }, 
      team1Offsides: {
        type: Number,
        default: 0      },
      team2Offsides: {
        type: Number,
        default: 0      }
})

module.exports = mongoose.model('result',Result);