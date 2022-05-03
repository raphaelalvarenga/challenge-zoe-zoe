import { Asset } from "../../data";

export interface IAssetUpdated extends Asset {
    previewPrice: number;
}
