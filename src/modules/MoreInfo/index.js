import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../Main/style';
import { CloseButton, Wrap } from './style';

export const MoreInfo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const currentID = useSelector((state) => state.currentID);

  const CloseFunc = () => {
    dispatch({ type: 'SET_MORE_INFO', payload: false });
  };

  return (
    <Wrap>
      <CloseButton onClick={() => CloseFunc()}>X</CloseButton>
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Description</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>{currentID + 1}</td>
              <td>{data[currentID].title}</td>
              <td>{data[currentID].description}</td>
              <td><Input type='checkbox' value={data[currentID].status}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrap>
  );
};
