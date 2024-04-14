from ._version import __version__

import os
import json
import tornado
from jupyter_server.base.handlers import JupyterHandler


def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": "brevmakesjupyterlookbetter"
    }]


def _jupyter_server_extension_paths():
    return [{
        "module": "brevmakesjupyterlookbetter"
    }]


class BMJLBExtensionHandler(JupyterHandler):
    def get(self):
        # print VERB_ env vars:
        self.finish(json.dumps({
            k: v for k, v in os.environ.items() if k.startswith("VERB_")
        }))

def _load_jupyter_server_extension(serverapp):
    handlers = [("/brevmakesjupyterlookbetter", BMJLBExtensionHandler)]
    serverapp.web_app.add_handlers(".*$", handlers)
