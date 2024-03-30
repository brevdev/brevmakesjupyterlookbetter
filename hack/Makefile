# Makefile for development

venv: requirements.in ## Create the virtual environment
	python3 -m venv venv
	venv/bin/pip install pip-tools
	venv/bin/pip-compile requirements.in
	venv/bin/pip install -r requirements.txt

.PHONY: run
run: venv ## Run the JupyterLab server
	venv/bin/jupyter lab

.PHONY: dev
dev: venv ## Run the JupyterLab server in watch mode
	venv/bin/jlpm watch

.PHONY: build
build: venv ## Build the JupyterLab extension
	venv/bin/jupyter labextension develop .. --overwrite
	venv/bin/jlpm build .. --output=../dist

.PHONY: clean
clean: ## Clean the project
	rm -rf venv


.PHONY: set-light-theme
set-light-theme: ## Set the light theme
	mkdir -p $(HOME)/.jupyter/lab/user-settings/@jupyterlab/apputils-extension
	echo '{"theme":"JupyterLab Light"}' > $(HOME)/.jupyter/lab/user-settings/@jupyterlab/apputils-extension/themes.jupyterlab-settings

.PHONY: set-dark-theme
set-dark-theme: ## Set the dark theme
	mkdir -p $(HOME)/.jupyter/lab/user-settings/@jupyterlab/apputils-extension
	echo '{"theme":"JupyterLab Dark"}' > $(HOME)/.jupyter/lab/user-settings/@jupyterlab/apputils-extension/themes.jupyterlab-settings

.PHONY: set-brev-theme
set-brev-theme: ## Set the brev theme
	mkdir -p $(HOME)/.jupyter/lab/user-settings/@jupyterlab/apputils-extension
	echo '{"theme":"brevmakesjupyterlookbetter"}' > $(HOME)/.jupyter/lab/user-settings/@jupyterlab/apputils-extension/themes.jupyterlab-settings
