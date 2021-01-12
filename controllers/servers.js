let data = [
  {
    title: "Main",
    count: 30,
    id: 1,
  },
  {
    title: "Features",
    count: 100,
    id: 2,
  },
]

export const getByID = (req, res) => {
  const obj = data.find(item => item.id.toString() === req.params.id)

  if (!obj) {
    throw new Error(`Cannot find by this id: ${req.params.id}`)
  } else {
    res.status(200).json(obj)
  }
}

export const getAll = (req, res) => {
  res.status(200).json(data)
}

export const create = (req, res) => {
  const newData = {
    id: Date.now().toString(),
    ...req.body,
  }

  data.push(newData)
  res.status(201).json(newData)
}

export const remove = (req, res) => {
  data = data.filter(item => item.id.toString() !== req.params.id)
  res.json({ message: 'Success of deleting' })
}
