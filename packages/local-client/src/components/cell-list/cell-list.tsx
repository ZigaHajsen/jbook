import './cell.list.css';
import { Fragment, useEffect } from 'react';
import { useActions, useTypedSelector } from '../../hooks';
import { CellListItem } from '..';
import { AddCell } from '..';

export const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );
  const { fetchCells } = useActions();

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  useEffect(() => {
    fetchCells();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='cell-list'>
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  );
};
