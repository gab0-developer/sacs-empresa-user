export function customHeadRender(columnMeta, handleToggleColumn) {

    return (
      <th
        className="custom-table-header"
        key={columnMeta.index}
        onClick={() => handleToggleColumn(columnMeta.index)}
      >
        {columnMeta.label}
      </th>
    );
}