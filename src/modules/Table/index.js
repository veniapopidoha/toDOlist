import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../Main/style';
import { MoreInfo } from '../MoreInfo';
import { Tables } from './style';

export const TableComponent = () => {
  const dispatch = useDispatch();
  const moreInfo = useSelector((state) => state.moreInfo);
  const data = useSelector((state) => state.data);

  const openMore = (i) => {
    dispatch({ type: 'SET_CURRENT_ID', payload: i });
    dispatch({ type: 'SET_MORE_INFO', payload: true });
  };

  const checkboxHandler = (i) => {
    dispatch({ type: 'SET_CURRENT_ID', payload: i });
    dispatch({ type: 'EDIT_CHECKBOX', payload: !data[i].status });
    console.log(i, ' ',!data[i].status )
  };
  return (
    <div>
      <Tables>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Description</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {Array.from(data).map((item = {}, i) => {
            return (
              <tr onClick={() => openMore(i)}>
                <td>{i + 1}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <Input onChange={checkboxHandler(i)} type='checkbox' />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Tables>

      {moreInfo && <MoreInfo />}
    </div>
  );
};
