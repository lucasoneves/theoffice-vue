import { ref } from 'vue'

export async function useFetch(url: string) {
  const data = ref()
  const error = ref()

  
  
  try {
    const response = await fetch(url)
    data.value = await response.json()
    return data
  } catch (err) {
    error.value = err
    console.error(err)
  }

  return { data, error }
}