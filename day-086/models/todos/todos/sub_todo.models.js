import mongoose from "mongoose";

const subTodos = new mongoose.Schema({
   content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    todo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo",
    },
}, { timestamp: true });

export const SubTodo = mongoose.model("SubTodo",
    subTodoSchema);
