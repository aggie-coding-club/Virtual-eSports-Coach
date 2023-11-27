# Tutorial and documetation for pytorchvideo can be found at:
# pytorchvideo.org/docs/tutorial_torchhub_inference
import torch
import json
from torchvision.transforms import Compose, Lambda
from torchvision.transforms._transforms_video import (CenterCropVideo, NormalizeVideo)
from pytorchvideo.data.encoded_video import EncodedVideo
from pytorchvideo.transforms import(
    ApplyTransformToKey,
    ShortSideScale,
    UniformTemporalSubsample,
    UniformCropVideo
)
from typing import Dict

# use cuda (gpu) if available, otherwise cpu
device = 'cuda' if torch.cuda.is_available() else 'cpu'

# set up a pretrained model, we can decide on this later
model_name = 'yolov5'
model = torch.hub.load('facebookresearch/pytorchvideo', model = model_name, pretrained = True)

# set to eval mode, use device
model = model.to(device)
model = model.eval()
