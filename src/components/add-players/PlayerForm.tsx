import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../UI/button/Button";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { addPlayer } from "../../store/player-arr/playersArrSlice";
import { emptyPlayerItem } from "../../models/PlayerProps";

interface Inputs {
    nameInput: string;
}

export default function PlayerForm() {
    const playerArr = useSelector((state: RootState) => state.playersArr);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(addPlayer({ ...emptyPlayerItem, name: data.nameInput }));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("nameInput", { required: true })} />
                <Button>Add Player</Button>
            </div>
            {errors.nameInput && <span>This field is required</span>}
        </form>
    );
}
