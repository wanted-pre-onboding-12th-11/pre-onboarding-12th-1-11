import {useRef} from 'react';
import Button from '../common/Button';

interface TodoCreateProps {
    createTodo: (value: string) => void;
}

const TodoCreate = ({createTodo}: TodoCreateProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const value = inputRef.current?.value || null;
        if (value && value !== '') {
            createTodo(value || '');
        }
        if (inputRef.current) {
            inputRef.current.value = '';
            inputRef.current.focus();
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                placeholder='할 일을 입력해 주세요...'
                data-testid='new-todo-input'
                type='text'
                ref={inputRef}
            />

            <Button name='추가' type='submit' testid='new-todo-add-button' />
        </form>
    );
};

export default TodoCreate;
