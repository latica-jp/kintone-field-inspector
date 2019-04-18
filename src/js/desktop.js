const getFieldByLabel = label => {
  return getField(field => field.label === label)
}

const getFieldByCode = code => {
  return getField(field => field.var === code)
}

const getFieldById = id => {
  return getField(field => Number.parseInt(field.id) === id)
}

const getField = finder => {
  return Object.values(cybozu.data.page.FORM_DATA.schema.table.fieldList).find(
    finder
  )
}

const inspectFieldByLabel = label => {
  const field = getFieldByLabel(label)
  return inspectField(field)
}

const inspectFieldByCode = code => {
  const field = getFieldByCode(code)
  return inspectField(field)
}

const inspectFieldById = id => {
  const field = getFieldById(id)
  return inspectField(field)
}

const inspectField = field => {
  if (field) {
    inspect(document.querySelector(getFieldSelector(field.id)))
  }
  return field
}

const getFieldSelector = id => {
  return `.value-${id}`
}

window['k'] = {
  lb: inspectFieldByLabel,
  cd: inspectFieldByCode,
  id: inspectFieldById,
}
