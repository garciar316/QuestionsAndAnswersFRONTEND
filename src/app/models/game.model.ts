import { Player } from "./player.model";
import { Round } from "./round.model";
import { Status } from "./status.model";

export interface Game {
    id: number;

    accumulated: number;

    status: Status;

    round: Round;

    player: Player;
}