const { sequelize } = require("../sequelize.config");
const { DataTypes } = require("sequelize");

const TodoItem = sequelize.define("Todo Item", {
  index: {
    type: DataTypes.VIRTUAL
  },
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: {
      args: false,
      msg: 'Name must be 2 - 255 characters long'
    },
    validate: {
      notEmpty: {
        args: true,
        msg: 'Name must be 2 - 255 characters long'
      },
      len: {
        args: [2, 255],
        msg: 'Name must be 2 - 255 characters long'
      }
    }
  },
  shortDescription: {
    type: DataTypes.TEXT,
    field: 'short_description',
    allowNull: {
      args: false,
      msg: 'Description must be 3 - 65535 characters long'
    },
    validate: {
      notEmpty: {
        args: true,
        msg: 'Description must be 3 - 65535 characters long'
      },
      len: {
        args: [3, 65535],
        msg: 'Description must be 3 - 65535 characters long'
      }
    }
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: {
      args: false,
      msg: 'Date is required'
    },
    validate: {
      notEmpty: {
        args: true,
        msg: 'Date is required'
      },
    }
  },
  time: {
    type: DataTypes.TIME,
    allowNull: {
      args: false,
      msg: 'Time is required'
    },
    validate: {
      notEmpty: {
        args: true,
        msg: 'Time is required'
      },
    }
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    field: 'is_done',
    defaultValue: false
  },
  timeFormatted: {
    type: DataTypes.VIRTUAL,
    field: 'time_formatted',
  },
  isUpcoming: {
    type: DataTypes.VIRTUAL,
    field: 'is_upcoming',
  }
}, {
  tableName: 'tbl_todo_items',
  indexes: [
    {
      unique: {
        args: true,
        msg: 'This todo item already exists.',
      },
      fields: ['date', 'time', 'name', 'short_description']
    }
  ]
});

const syncTodoItemTable = async () => {
  await sequelize.sync();
}

// syncTodoItemTable();
module.exports = { sequelize, TodoItem, syncTodoItemTable }