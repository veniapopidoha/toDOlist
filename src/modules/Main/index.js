import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoreInfo } from '../MoreInfo';
import { TableComponent } from '../Table';
import {
  Button,
  CreateConteiner,
  Error,
  Input,
  InputConteiner,
  Title,
  Wrap,
} from './style';

export const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [titleEmpty, setTitleEmpty] = useState(false);
  const [descriptionEmpty, setDescriptionEmpty] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [errors, setErrors] = useState({
    titleError: ' ',
    descriptionError: ' ',
  });

  const CreateTask = (e) => {
    e.preventDefault();

    const task = { title, description, status: false };
    dispatch({ type: 'SET_TASK_INFO', payload: task });
  };

  const handleTitle = (e) => {
    let temp = e.target.value;

    // if (temp === '') {
    //   setErrors({ ...errors, titleError: 'This field is empty' });
    // } else {
    //   setErrors({ ...errors, titleError: '' });
    // }
    setTitle(temp);
  };

  const handleDescription = (e) => {
    let temp = e.target.value;

    if (temp === '') {
      setErrors({ ...errors, descriptionError: 'This field is empty' });
    } else {
      setErrors({ ...errors, descriptionError: '' });
    }
    setDescription(temp);
  };

  useEffect(() => {
    if (errors.titleError || errors.descriptionError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errors]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'title':
        setTitleEmpty(true);
        break;
      case 'description':
        setDescriptionEmpty(true);
        break;
      default:
        break;
    }
  };

  return (
    <Wrap>
      <CreateConteiner onSubmit={CreateTask}>
        <InputConteiner>
          <Title>Title:</Title>
          <Input
            name='title'
            type='text'
            value={title}
            onChange={handleTitle}
            error={errors.titleError}
            empty={titleEmpty}
            onBlur={(e) => blurHandler(e)}
          />
          {errors.titleError && <Error>{errors.titleError}</Error>}
        </InputConteiner>
        <InputConteiner>
          <Title>Description:</Title>
          <Input
            name='description'
            type='text'
            value={description}
            onChange={handleDescription}
            error={errors.descriptionError}
            empty={descriptionEmpty}
            onBlur={(e) => blurHandler(e)}
          />
          {errors.descriptionError && <Error>{errors.descriptionError}</Error>}
        </InputConteiner>
        <Button disabled={!formValid} type='submit'>
          Create
        </Button>
      </CreateConteiner>
      <TableComponent />
    </Wrap>
  );
};
