; Gym CRM Desktop Installer
; NSIS Script para criar instalador profissional

!include "MUI2.nsh"
!include "x64.nsh"

; Configurações básicas
Name "Gym CRM"
OutFile "Gym-CRM-Setup-1.0.0.exe"
InstallDir "$PROGRAMFILES\Gym CRM"
InstallDirRegKey HKLM "Software\Gym CRM" "Install_Dir"

; MUI Settings
!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_PAGE_FINISH

!insertmacro MUI_LANGUAGE "PortugueseBR"

; Instalação
Section "Instalar Gym CRM"
  SetOutPath "$INSTDIR"
  
  ; Copiar todos os arquivos da pasta win-unpacked
  File /r "dist\win-unpacked\*.*"
  
  ; Criar atalho no Menu Iniciar
  CreateDirectory "$SMPROGRAMS\Gym CRM"
  CreateShortcut "$SMPROGRAMS\Gym CRM\Gym CRM.lnk" "$INSTDIR\Gym CRM.exe"
  CreateShortcut "$SMPROGRAMS\Gym CRM\Desinstalar.lnk" "$INSTDIR\uninstall.exe"
  
  ; Criar atalho na Área de Trabalho
  CreateShortcut "$DESKTOP\Gym CRM.lnk" "$INSTDIR\Gym CRM.exe"
  
  ; Registrar no Painel de Controle
  WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\Gym CRM" "DisplayName" "Gym CRM"
  WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\Gym CRM" "UninstallString" "$INSTDIR\uninstall.exe"
  WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\Gym CRM" "DisplayVersion" "1.0.0"
  WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\Gym CRM" "Publisher" "Graphics Vision"
  
  ; Criar desinstalador
  WriteUninstaller "$INSTDIR\uninstall.exe"
SectionEnd

; Desinstalação
Section "Uninstall"
  RMDir /r "$INSTDIR"
  RMDir /r "$SMPROGRAMS\Gym CRM"
  Delete "$DESKTOP\Gym CRM.lnk"
  DeleteRegKey HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\Gym CRM"
SectionEnd
