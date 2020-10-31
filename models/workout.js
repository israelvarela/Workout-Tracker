const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter exercise name"
                },

                time: {
                    type: Number,
                    required: "Enter total time"
                }

                weight: {
                    type: Number,
                },

                reps: {
                    type: Number,
                },

                sets: {
                    type: Number,
                },

                distance: {
                    type: Number
                }
            }
        ]
    },

    {
        toJson: {
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuratioon").get(function() {
    return this.exercises.reduce((total, exercises) => {
        return total + exercises.duration;
    }, 0);
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;