const getFieldByLabel = label => {
  return getField(field => field.label === label)
}

const getFieldByCode = code => {
  return getField(field => field.var === code)
}

const getField = finder => {
  return Object.values(cybozu.data.page.FORM_DATA.schema.table.fieldList).find(
    finder
  )
}

const inspectFieldByLabel = label => {
  const field = getFieldByLabel(label)
  if (field) {
    inspect(document.querySelector(getFieldSelector(field.id)))
  }
  return field
}

const inspectFieldByCode = code => {
  const field = getFieldByCode(code)
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
}
