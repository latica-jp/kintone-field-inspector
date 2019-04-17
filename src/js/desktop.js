const getFieldIdByLabel = label => {
  return getFieldId(field => field.label === label)
}

const getFieldIdByCode = code => {
  return getFieldId(field => field.var === code)
}

const getFieldId = finder => {
  const field = Object.values(
    cybozu.data.page.FORM_DATA.schema.table.fieldList
  ).find(finder)
  return field ? field.id : null
}

const inspectFieldByLabel = label => {
  return inspect(
    document.querySelector(getFieldSelector(getFieldIdByLabel(label)))
  )
}

const inspectFieldByCode = code => {
  return inspect(
    document.querySelector(getFieldSelector(getFieldIdByCode(code)))
  )
}

const getFieldSelector = id => {
  return `.value-${id}`
}

window['k'] = { lb: inspectFieldByLabel, cd: inspectFieldByCode }
