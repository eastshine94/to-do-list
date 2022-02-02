import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';

import { getSessionItem } from '../../lib/storage';

function renderSuccessType(isSuccess) {
  const tagColors = ['green', 'red'];
  const label = isSuccess ? '성공' : '실패';
  return <Tag color={tagColors[isSuccess ? 0 : 1]}>{label}</Tag>;
}

function TodoFinish() {
  const [todoList, setTodoList] = useState(getSessionItem('todo-finish') ?? []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: '할 일',
      dataIndex: 'title'
    },
    {
      title: '달성 여부',
      dataIndex: 'isSuccess',
      align: 'center',
      render: renderSuccessType
    },
    {
      title: '생성일',
      dataIndex: 'createdAt'
    },
    {
      title: '완료일',
      dataIndex: 'finishedAt'
    }
  ];

  return (
    <div className="p-5">
      <header className="mb-5 flex justify-between">
        <h1 className="text-[20px]">할 일 완료!!</h1>
        <Link
          to=".."
          className="block p-2 border border-solid border-gray-400 hover:border-sky-300"
        >
          할 일 목록
        </Link>
      </header>

      <section>
        <div>
          <table className="w-full border border-solid border-[#000] border-collapse">
            <thead>
              <tr>
                {columns.map((col, idx) => (
                  <th
                    className="p-3 border border-solid border-[#000]"
                    key={idx}
                  >
                    {col.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {todoList.map(todo => (
                <tr key={todo.id}>
                  {columns.map((col, idx) => (
                    <td
                      className="p-3 border border-solid border-[#000]"
                      style={{ textAlign: col.align }}
                      key={idx}
                    >
                      {col.render?.(todo[col.dataIndex], todo) ??
                        todo[col.dataIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default TodoFinish;
