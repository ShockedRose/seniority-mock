import { useState, useEffect } from 'react'
import { Player, PlayerService } from '../../services/player/player.service'

export const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>([])

  const getAllPlayers = async () => {
    try {
      const playersResponse = await PlayerService.getPlayers()
      setPlayers(playersResponse)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getAllPlayers()
  }, [])

  return { players }
}
