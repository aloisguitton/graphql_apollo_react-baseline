const mockUsers = [
  { name: 'Elon Musk', id: 1 },
  { name: 'Mark Zuckerberg', id: 2 },
  { name: 'Bill Gates', id: 3 },
  { name: 'Steve Jobs', id: 4 },
]
export async function users() {
  return mockUsers
}

export async function user(
  _: any,
  input: {
    id: number
  },
) {
  const { id } = input
  return mockUsers.find(u => u.id === id)
}
