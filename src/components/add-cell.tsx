import { useActions } from '../hooks';
import './add-cell.css';

interface AddCellProps {
  nextCellId: string | null;
}

export const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
  const { insertCellBefore } = useActions();

  return (
    <div>
      <button onClick={() => insertCellBefore(nextCellId, 'code')}>Code</button>
      <button onClick={() => insertCellBefore(nextCellId, 'text')}>Text</button>
    </div>
  );
};
