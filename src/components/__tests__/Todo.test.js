import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../Todo';

afterEach(() => {
  cleanup()
})

describe('Todo app', () => {
  test('Should render non completed Todo', () => {
    const todo = {id: 1, title: "Going to supermarket", completed: false}

    render(<Todo todo={todo} />)

    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Going to supermarket');
    expect(todoElement).not.toContainHTML('<strike>');
  })

  test('Should render  completed Todo', () => {
    const todo = {id: 2, title: "Make dinner", completed: true}

    render(<Todo todo={todo} />)

    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Make dinner');
    expect(todoElement).toContainHTML('<div data-testid="todo-2"><strike><h1>Make dinner</h1></strike></div>');
  })

  test('matches snapshot', () => {
    const todo = {id: 1, title: "Going to supermarket", completed: false};

    const tree = renderer.create(<Todo todo={todo} />).toJSON();
    // console.log(tree)
    expect(tree).toMatchSnapshot();
  })
});