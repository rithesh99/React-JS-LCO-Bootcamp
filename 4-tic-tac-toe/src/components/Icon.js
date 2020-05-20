import React from "react"
import {FaTimes, FaPen, FaRegCircle} from "react-icons/fa"

const Icon = ({name}) => {
    switch (name) {
        case 'Player 1':
            return <FaTimes className="icon text-success" />
        case 'Player 2':
            return <FaRegCircle className="icon text-danger" />
        default:
            return <FaPen className="icon text-dark" />
        }
};

export default Icon;